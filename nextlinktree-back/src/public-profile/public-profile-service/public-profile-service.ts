import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { Link, LinkSchema } from 'src/schemas/link-schema/link-schema';
import { publicProfile } from '../DTOs/publicProfileDto';
import { publicLinksDTO } from '../DTOs/publicLinksDto'; 
@Injectable()
export class PublicProfileService {

    constructor(
        @InjectModel(Profile.name) private profileSchema: Model<Profile>,
        @InjectModel(Link.name) private linkSchema: Model<Link>,
    ) { }

    async getDataProfile(id:string): Promise <Profile>{
        try {
            const getDataprofile = await this.profileSchema.findOne({
                id: id
            });

            return getDataprofile;
        } catch (error) {
            
        }
    }


};
