import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from '@nestjsplus/knex';
import * as config from 'config';

@Module({
  imports: [
    KnexModule.register(config.get('knex')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
