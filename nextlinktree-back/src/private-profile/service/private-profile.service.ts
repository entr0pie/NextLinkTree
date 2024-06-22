import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { UpdatePrivateProfile } from '../DTO/UpdatePrivateProfileDTO';
import { PrivateLinksDTO } from '../DTO/privateLinksDTO';
import { Link } from 'src/schemas/link-schema/link-schema';


@Injectable()
export class PrivateProfileService {

    constructor(
        @InjectModel(Profile.name) private profileSchema: Model<Profile>,
        @InjectModel(Link.name) private linkSchema: Model<Link>,
    ) { }

    async updateProfile(id: string, UpdatePrivateProfile: UpdatePrivateProfile): Promise<Profile> {
        const profile = await this.profileSchema.findOne({_id : id});

        if (!profile) { throw new Error('Profile not found'); }

        let updateData : any = {}

        if(UpdatePrivateProfile.username) {
            updateData.username = UpdatePrivateProfile.username;
        }
        if(UpdatePrivateProfile.fullName) {
            updateData.fullName = UpdatePrivateProfile.fullName;
        }
        if(UpdatePrivateProfile.biography) {
            updateData.biography = UpdatePrivateProfile.biography;
        }
        
        await this.profileSchema.updateOne({_id : profile.id}, {$set: updateData});

        const updatedProfile = await this.profileSchema.findById(profile._id);

        return updatedProfile;
    }

    async updateLinks(PrivateLinksDTO: PrivateLinksDTO): Promise<Link> {
        const link = await this.linkSchema.findOne({alias : PrivateLinksDTO.oldAlias});

        if (!link) { throw new Error('link not found'); }

        let updateData : any = {}

        if(PrivateLinksDTO.alias) { updateData.alias = PrivateLinksDTO.alias }
        if(PrivateLinksDTO.link) { updateData.link  = PrivateLinksDTO.link }

        await this.linkSchema.updateOne({_id: link.id}, {$set: updateData});

        const updatedLinks = await this.linkSchema.findById(link.id);

        return updatedLinks;
    }

}
