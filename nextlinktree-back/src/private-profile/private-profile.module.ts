import { Module } from '@nestjs/common';
import { PrivateProfileService } from './service/private-profile.service';
import { PrivateProfileController } from './controller/private-profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from 'src/schemas/profile-schema/profile-schema';
import { Link, LinkSchema } from 'src/schemas/link-schema/link-schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }])
  ],
  providers: [PrivateProfileService],
  controllers: [PrivateProfileController]
})
export class PrivateProfileModule {}
