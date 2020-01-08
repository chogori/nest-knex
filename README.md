### Nest-knex

##### This is just a little try to integrate knex with nest.js

Command for starting application you can find in package.json

If you want to create new migration you need:

1. install packages from package.json

```bash
npm i
```
2. use knex local package for creating migration

```bash
	node_modules/.bin/knex migrate:make NAME (there is you can input the name of migration)
```

example:

```bash
 node_modules/.bin/knex migrate:make create_user_table
```

And also there is you can use another commands from migration cli of [knex](http://knexjs.org/#Migrations-CLI)