import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
	return knex.schema
	  .createTable('users', function (table) {
		 table.increments('id');
		 table.text('username').notNullable();
		 table.text('password').notNullable();
	  });
}


export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable('users');
}