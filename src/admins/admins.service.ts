import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Admins } from "./models/admins.model";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admins) private adminsModel: typeof Admins) {}

  async createAdmins(createAdminDto: CreateAdminDto): Promise<Admins> {
    const admins = await this.adminsModel.create(createAdminDto);
    return admins;
  }

  async getAllAdmins(): Promise<Admins[]> {
    return this.adminsModel.findAll();
  }

  async getAdminsById(id: number): Promise<Admins | null> {
    return this.adminsModel.findByPk(id);
  }

  async deleteAdminsById(id: number): Promise<string> {
    const res = await this.adminsModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id} - admins o'chirildi`;
    }
    return `${id} - admins topilmadi`;
  }

  async updateAdminsById(
    id: number,
    updateAdminDto: UpdateAdminDto
  ): Promise<Admins | null> {
    const admins = await this.adminsModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });

    return admins[1][0];
  }
}
