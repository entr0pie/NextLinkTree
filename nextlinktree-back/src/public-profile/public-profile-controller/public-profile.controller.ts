import { Body, Controller, Param, Put, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Profile } from 'src/schemas/profile-schema/profile-schema';
import { Link, LinkSchema } from 'src/schemas/link-schema/link-schema';
import { publicProfile } from '../DTOs/publicProfileDto';
import { publicLinksDTO } from '../DTOs/publicLinksDto';
import { PublicProfileService } from '../public-profile-service/public-profile-service';

@ApiTags('Public Profile')
@Controller('public-profile')
export class PublicProfileController {

    constructor(
        private readonly publicProfileService: PublicProfileService,
    ) { }

    @Get('get-data-profile/id')
    async getDataProfile(@Param('id') id: string): Promise<Profile> {
        return this.publicProfileService.getDataProfile(id);
    }

    @Get('/:username')
    async getProfile(@Param('username') username: string): Promise<publicProfile> {
        return this.publicProfileService.getProfile(username);
    }
}
