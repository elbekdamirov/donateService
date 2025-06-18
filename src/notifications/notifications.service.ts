import { Injectable } from "@nestjs/common";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { Notifications } from "./models/notification.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class NotificationsService {
  constructor(
    @InjectModel(Notifications) private notificationModel: typeof Notifications
  ) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return this.notificationModel.create(createNotificationDto);
  }

  findAll() {
    return this.notificationModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.notificationModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    const machine = await this.notificationModel.update(updateNotificationDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0];
  }

  async remove(id: number) {
    const res = await this.notificationModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id}-machine o'chirildi`;
    }

    return `${id} - machine yo'q`;
  }
}
