import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';

@Injectable()
export class AppService {
  constructor(
    @Inject(KNEX_CONNECTION) private readonly knex,
  ) {}

  findAll() {
    return this.knex('users')
      .select('*');
  }
}
