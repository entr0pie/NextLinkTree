import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemasModule } from './schemas/schemas.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PublicProfileModule } from './public-profile/public-profile.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('DATABASE_CONNECTION_URL'),
      autoCreate: true,
    }),
    inject: [ConfigService],
  }), SchemasModule, DashboardModule, PublicProfileModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
