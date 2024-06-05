import { Module } from '@nestjs/common';
import { PublicProfileServiceService } from './public-profile-service/public-profile-service';

@Module({
  providers: [PublicProfileServiceService]
})
export class PublicProfileModule {}
