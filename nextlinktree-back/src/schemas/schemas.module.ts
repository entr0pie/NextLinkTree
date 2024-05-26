import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './account-schema/account-schema';
import { Profile, ProfileSchema } from './profile-schema/profile-schema';
import { Link, LinkSchema } from './link-schema/link-schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Account.name, schema: AccountSchema },
        { name: Profile.name, schema: ProfileSchema },
        { name: Link.name, schema: LinkSchema },
    ])],
    controllers: [],
    providers: [],
})
export class SchemasModule { }
