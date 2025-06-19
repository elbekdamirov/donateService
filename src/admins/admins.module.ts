import { Module } from "@nestjs/common";
import { AdminsController } from "./admins.controller";
import { AdminsService } from "./admins.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Admins } from "./models/admins.model";
import { RolesModule } from "../roles/roles.module";

@Module({
  imports: [SequelizeModule.forFeature([Admins]), RolesModule],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminsModule {}
