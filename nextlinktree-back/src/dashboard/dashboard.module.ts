import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard-service/dashboard.service';
import { DashboardController } from './dashboard-controller/dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/account-schema/account-schema';
import { Profile, ProfileSchema } from 'src/schemas/profile-schema/profile-schema';
import { Link, LinkSchema } from 'src/schemas/link-schema/link-schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    MongooseModule.forFeature([{ name: Profile.name, schema: ProfileSchema }]),
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  providers: [DashboardService],
  controllers: [DashboardController]
})
export class DashboardModule { }
