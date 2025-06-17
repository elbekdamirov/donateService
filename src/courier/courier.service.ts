import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Courier } from "./models/courier.model";
import { CreateCourierDto } from "./dto/create-courier.dto";
import { UpdateCourierDto } from "./dto/update-courier.dto";

@Injectable()
export class CourierService {
  constructor(@InjectModel(Courier) private courierModel: typeof Courier) {}

  async createCourier(createCourierDto: CreateCourierDto): Promise<Courier> {
    const courier = await this.courierModel.create(createCourierDto);
    return courier;
  }

  async getAllCourier(): Promise<Courier[]> {
    return this.courierModel.findAll();
  }

  async getCourierById(id: number): Promise<Courier | null> {
    return this.courierModel.findByPk(id);
  }

  async deleteCourierById(id: number): Promise<string> {
    const res = await this.courierModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id} - courier o'chirildi`;
    }
    return `${id} - courier topilmadi`;
  }

  async updateCourierById(
    id: number,
    updateCourierDto: UpdateCourierDto
  ): Promise<Courier | null> {
    const courier = await this.courierModel.update(updateCourierDto, {
      where: { id },
      returning: true,
    });

    return courier[1][0];
  }
}
