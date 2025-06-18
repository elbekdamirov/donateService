import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./models/user.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private userModel: typeof Users) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const users = await this.userModel.create(createUserDto);
    return users;
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findOne(id: number): Promise<Users | null> {
    return this.userModel.findByPk(id, { include: { all: true } });
  }

  async remove(id: number): Promise<string> {
    const res = await this.userModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id} - user o'chirildi`;
    }
    return `${id} - user topilmadi`;
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto
  ): Promise<Users | null> {
    const users = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });

    return users[1][0];
  }
}
