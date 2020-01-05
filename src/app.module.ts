import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
import { KnexModule } from '@nestjsplus/knex';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    KnexModule.registerAsync({
      useExisting: ConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
