import { Module } from '@nestjs/common';
import { PublicProfileService } from './public-profile-service/public-profile-service';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from 'src/schemas/profile-schema/profile-schema';
import { Link, LinkSchema } from 'src/schemas/link-schema/link-schema';
import { PublicProfileController } from './public-profile-controller/public-profile.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }])
  ],
  providers: [PublicProfileService],
  controllers: [PublicProfileController]
})
export class PublicProfileModule { }
