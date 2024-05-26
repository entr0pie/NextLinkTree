import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemasModule } from './schemas/schemas.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('DATABASE_CONNECTION_URL'),
      autoCreate: true,
    }),
    inject: [ConfigService],
  }), SchemasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
