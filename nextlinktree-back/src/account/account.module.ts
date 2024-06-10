import { Module } from '@nestjs/common';
import { AccountService } from './account-service/account.service';
import { AccountController } from './account-controller/account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/account-schema/account-schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [AccountService],
  controllers: [AccountController]
})
export class AccountModule {}
