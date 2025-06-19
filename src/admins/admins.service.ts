import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Admins } from "./models/admins.model";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/models/role.model";

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel(Admins) private adminsModel: typeof Admins,
    private readonly roleService: RolesService
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admins> {
    const role = await this.roleService.findRoleByValue(createAdminDto.name);
    if (!role) {
      throw new NotFoundException("Bunday role mavjud emas");
    }
    const admin = await this.adminsModel.create(createAdminDto);

    await admin.$set("roles", [role.id]); // AdminRole.create(adminId, roleId)
    await admin.save();

    return admin;
  }

  findAll() {
    return this.adminsModel.findAll({
      include: {
        model: Role,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
  }

  async getAdminsById(id: number): Promise<Admins | null> {
    return this.adminsModel.findByPk(id, {
      include: {
        model: Role,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
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
