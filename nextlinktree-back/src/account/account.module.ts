import { Module } from '@nestjs/common';
import { AccountService } from './account-service/account.service';
import { AccountController } from './account-controller/account.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/schemas/account-schema/account-schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    AuthModule,
  ],
  providers: [AccountService],
  controllers: [AccountController],
  exports: [AccountService, MongooseModule], 
})
export class AccountModule {}
