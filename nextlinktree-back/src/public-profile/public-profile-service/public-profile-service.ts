import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { Link } from 'src/schemas/link-schema/link-schema';
import { PublicProfileDTO } from '../DTOs/publicProfileDto';

@Injectable()
export class PublicProfileService {

    constructor(
        @InjectModel(Profile.name) private profileSchema: Model<Profile>,
        @InjectModel(Link.name) private linkSchema: Model<Link>,
    ) { }

    async getDataProfile(id: string): Promise<Profile> {
        try {
            const getDataprofile = await this.profileSchema.findOne({
                id: id
            });

            return getDataprofile;
        } catch (error) {

        }
    }

    async getProfile(username: string): Promise<PublicProfileDTO> {
        const profile = await this.profileSchema.findOne({
            username: username
        });

        if (!profile) throw new NotFoundException('Profile not found');

        const links = await this.linkSchema.find({
            profile: profile
        });

        return {
            username: profile.username,
            biography: profile.biography,
            links: links
        }

    }


};
