import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from 'src/schemas/link-schema/link-schema';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { PublicProfile } from '../dto/PublicProfile';
import { DomainUsage } from '../dto/DomainUsage';
import { Account } from 'src/schemas/account-schema/account-schema';
import { ActiveUsersQuantity } from '../dto/ActiveUsersQuantity';

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
     */
    async search(keyword: string): Promise<PublicProfile[]> {
        this.LOGGER.log(`Searching for profiles and links with keyword: ${keyword}`);

        const profilesQuery = this.profileSchema.find({
            $or: [
                { username: { $regex: keyword, $options: 'i' } },
                { fullName: { $regex: keyword, $options: 'i' } },
                { biography: { $regex: keyword, $options: 'i' } },
            ]
        });

        const linksQuery = this.linkSchema.find({
            $or: [
                { alias: { $regex: keyword, $options: 'i' } },
                { link: { $regex: keyword, $options: 'i' } },
            ]
        });

        const [profiles, links] = await Promise.all([profilesQuery, linksQuery]);

        const publicProfiles: PublicProfile[] = [];

        for (let i = 0; i < profiles.length; i++) {
            const foundProfile = profiles[i];
            const relatedLinks = await this.linkSchema.find({ profile: foundProfile._id });

            const publicProfile: PublicProfile = {
                username: foundProfile.username,
                fullName: foundProfile.fullName,
                biography: foundProfile.biography,
                links: relatedLinks.map(l => ({ alias: l.alias, link: l.link })),
            }

            publicProfiles.push(publicProfile);
        }

        for (let i = 0; i < links.length; i++) {
            const relatedProfile = await this.profileSchema.findOne({ _id: links[i].profile });
            const relatedLinks = this.linkSchema.find({ profile: relatedProfile._id });

            const publicProfile: PublicProfile = {
                username: relatedProfile.username,
                fullName: relatedProfile.fullName,
                biography: relatedProfile.biography,
                links: (await relatedLinks).map(l => ({ alias: l.alias, link: l.link })),
            }

            publicProfiles.push(publicProfile);
        }

        this.LOGGER.log(`Found ${publicProfiles.length} profiles and links with keyword: ${keyword}`);
        return publicProfiles;
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
