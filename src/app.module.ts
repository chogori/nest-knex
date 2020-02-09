import * as config from "config";
import { Module } from "@nestjs/common";
import { KnexModule } from "@nestjsplus/knex";

import { HealthCheckModule } from "./modules/health-check/health-check.module";
import { UserModule } from "./modules/user/user.module";
import { AppService } from "./app.service";

const knexConfig = config.get("knex");

@Module({
  imports: [KnexModule.register(knexConfig), HealthCheckModule, UserModule],
  providers: [AppService]
})
export class AppModule {}
