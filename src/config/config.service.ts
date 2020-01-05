import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from '@hapi/joi';
import { KnexOptions } from '@nestjsplus/knex';

@Injectable()
export class ConfigService extends ConfigManager {
  provideConfigSpec() {
    return {
      host: {
        validate: Joi.string(),
        required: false,
        default: 'localhost',
      },
      port: {
        validate: Joi.number()
          .min(5000)
          .max(65535),
        required: false,
        default: 5432,
      },
      user: {
        validate: Joi.string(),
        required: true,
        default: 'postgres',
      },
      password: {
        validate: Joi.string(),
        required: true,
        default: 'postgres',
      },
      database: {
        validate: Joi.string(),
        required: true,
        default: 'postgres',
      },
    };
  }

  createKnexOptions(): KnexOptions {
    return {
      client: 'pg',
      debug: true,
      connection: {
        host: this.get<string>('host'),
        user: this.get<string>('user'),
        password: this.get<string>('password'),
        database: this.get<string>('database'),
        port: this.get<number>('port'),
      },
    };
  }
}
