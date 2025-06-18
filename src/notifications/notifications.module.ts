import { Module } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Notifications } from "./models/notification.model";

@Module({
  imports: [SequelizeModule.forFeature([Notifications])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
