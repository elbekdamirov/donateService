import { Module } from "@nestjs/common";
import { SocialUserService } from "./social-user.service";
import { SocialUserController } from "./social-user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { SocialUser } from "./models/social-user.model";

@Module({
  imports: [SequelizeModule.forFeature([SocialUser])],
  controllers: [SocialUserController],
  providers: [SocialUserService],
})
export class SocialUserModule {}
