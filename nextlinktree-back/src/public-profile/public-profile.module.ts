import { Module } from '@nestjs/common';
import { PublicProfileService } from './public-profile-service/public-profile-service';

@Module({
  providers: [PublicProfileService]
})
export class PublicProfileModule {}
