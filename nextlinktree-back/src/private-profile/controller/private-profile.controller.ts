import { Body, Controller, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrivateProfileService } from '../service/private-profile.service';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { UpdatePrivateProfile } from '../DTO/UpdatePrivateProfileDTO';
import { PrivateLinksDTO } from '../DTO/privateLinksDTO';
import { Link } from '../../schemas/link-schema/link-schema';

@ApiTags('Private Profile')
@Controller('private-profile')
export class PrivateProfileController {

    constructor(
        private readonly privateProfileService: PrivateProfileService,
    ) {}

    @Put('update-profile')
    async updateProfile(@Body() updatePrivateProfile: UpdatePrivateProfile): Promise<Profile> {

        return this.privateProfileService.updateProfile(updatePrivateProfile);
    }

    @Put('update-link')
    async updateLinks(@Body() privateLinksDTO: PrivateLinksDTO): Promise<Link> {

        return this.privateProfileService.updateLinks(privateLinksDTO);
    } 

}
