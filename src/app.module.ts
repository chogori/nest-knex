import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigService } from './config/config.service';
import { KnexModule } from '@nestjsplus/knex';
// import { ConfigModule } from './config/config.module';
import * as config from 'config';

@Module({
  imports: [
    // ConfigModule,
    KnexModule.register(config.get('knex')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
