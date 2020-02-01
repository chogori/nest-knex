import { Module } from "@nestjs/common";
import { UserService } from "./user.service";

@Module({
  exports: [UserService],
  imports: [],
  providers: [UserService]
})
export class UserModule {}
