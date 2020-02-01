import * as Knex from "knex";
import { head } from "ramda";
import { Inject, Injectable } from "@nestjs/common";
import { KNEX_CONNECTION } from "@nestjsplus/knex";

import { CreateUser, GetUser, UpdateUser, User } from "./user.interfaces";

@Injectable()
export class UserService {
  constructor(
    @Inject(KNEX_CONNECTION)
    private readonly knex: Knex
  ) {}

  public async create(
    userData: CreateUser,
    trx?: Knex.Transaction
  ): Promise<User> {
    const qb = trx ? trx<User>("users") : this.knex<User>("users");

    return qb
      .insert(userData)
      .returning("*")
      .then(head);
  }

  public async isUserExists(email: string): Promise<boolean> {
    return Boolean(
      await this.knex<User>("users")
        .where({
          email
        })
        .limit(1)
        .then(head)
    );
  }

  public async update(id: number, data: UpdateUser): Promise<User> {
    return this.knex<User>("users")
      .where("id", id)
      .update({
        ...data
      });
  }

  public async findOne(id: number): Promise<User> {
    return this.knex<User>("users")
      .select("*")
      .where("id", id)
      .then(head);
  }
}
