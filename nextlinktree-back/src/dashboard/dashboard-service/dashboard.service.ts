import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from 'src/schemas/link-schema/link-schema';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { PublicProfile } from '../dto/PublicProfile';
import { DomainUsage } from '../dto/DomainUsage';
import { Account } from 'src/schemas/account-schema/account-schema';
import { ActiveUsersQuantity } from '../dto/ActiveUsersQuantity';
import { ResumedPublicProfile } from '../dto/ResumedPublicProfile';

/**
 * Service for the dashboard module.
 */
@Injectable()
export class DashboardService {

    private readonly LOGGER = new Logger(DashboardService.name);

    constructor(
        @InjectModel(Account.name) private accountSchema: Model<Account>,
        @InjectModel(Profile.name) private profileSchema: Model<Profile>,
        @InjectModel(Link.name) private linkSchema: Model<Link>,
    ) { }


    /**
     * Search for NextLinkTree users by keyword.
     * 
     * The matchers are the following:
     * 
     * - username
     * - full name
     * - biography
     * - links
     * 
     * @param keyword keyword for searching.
     * @returns a list of public profiles that match the keyword.
     * 
     * @link https://mongoosejs.com/docs/populate.html#deep-populate
     */
    async search(keyword: string): Promise<PublicProfile[]> {
        this.LOGGER.log(`Searching for profiles and links with keyword: ${keyword}`);

        const results = await this.linkSchema.find({
            $or: [
                {
                    $or: [
                        { link: { $regex: keyword, $options: 'i' } },
                        { alias: { $regex: keyword, $options: 'i' } }
                    ],
                },
                {
                    profile: {
                        $in: await this.profileSchema.find({
                            $or: [
                                { username: { $regex: keyword, $options: 'i' } },
                                { fullName: { $regex: keyword, $options: 'i' } },
                                { biography: { $regex: keyword, $options: 'i' } }
                            ]
                        }).distinct('_id')
                    }
                }
            ]
        }).populate({
            path: 'profile',
        });

        const profiles: PublicProfile[] = [];

        results.forEach((link) => {
            if (link.profile) {
                const { username, fullName, biography } = link.profile;
                profiles.push({
                    username,
                    fullName,
                    biography,
                    links: [{ link: link.link, alias: link.alias }]
                });
            }
        });

        const uniqueProfiles = profiles.filter((profile, index, self) =>
            index === self.findIndex((t) => (
                t.username === profile.username
            ))
        );

        return uniqueProfiles;
    }

    /**
     * Search for NextLinkTree users by keyword and dates.
     * 
     * @param keyword keyword for searching. 
     * @param startDate date to start the search.
     * @param endDate date to end the search.
     * @returns a list of public profiles that match the keyword and dates.
     */
    async searchWithDates(keyword: string, startDate: Date, endDate: Date): Promise<ResumedPublicProfile[]> {
        const accounts = await this.accountSchema.find({
            createdAt: {
                $gte: startDate,
                $lte: endDate
            }
        });

        const profiles = await this.profileSchema.find({
            account: { $in: accounts.map(account => account._id) },
            $or: [
                { username: { $regex: keyword, $options: 'i' } },
                { fullName: { $regex: keyword, $options: 'i' } },
                { biography: { $regex: keyword, $options: 'i' } }
            ]
        });

        const publicProfiles: ResumedPublicProfile[] = [];

        profiles.forEach((profile) => {
            publicProfiles.push({
                username: profile.username,
                fullName: profile.fullName,
                biography: profile.biography,
            });
        });

        const uniqueProfiles = publicProfiles.filter((profile, index, self) => {
            return index === self.findIndex((t) => (
                t.username === profile.username
            ));
        });

        return uniqueProfiles;
    }

    /**
     * Get the quantity of active users.
     * 
     * @returns the quantity of active users.
     */
    async getActiveUsersQuantity(): Promise<ActiveUsersQuantity> {
        this.LOGGER.log("Getting the quantity of active users");
        return this.accountSchema.countDocuments().then((quantity) => ({ quantity }));
    }

    /**
     * Get the most used domains in the app.
     * 
     * @returns the most used domains.
     */
    async getMostUsedDomains(): Promise<DomainUsage[]> {
        this.LOGGER.log("Getting the most used domains");
        const allLinks = this.linkSchema.find();

        async function buildMostUsedDomains(links: Link[]): Promise<DomainUsage[]> {
            const domainsUsage: DomainUsage[] = [];

            async function extractDomain(url: string) {
                return new URL(url).hostname;
            }

            for (let i = 0; i < links.length; i++) {
                const userLink = links[i];
                extractDomain(userLink.link).then((domain) => {
                    const domainUsage = domainsUsage.find(d => d.domain === domain);

                    if (domainUsage) {
                        domainUsage.quantity++;
                    } else {
                        domainsUsage.push({ domain, quantity: 1 });
                    }
                });
            }

            return domainsUsage;
        }

        return allLinks.then((links) => buildMostUsedDomains(links));
    }
}
