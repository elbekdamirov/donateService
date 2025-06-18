import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { SocialUser } from "./models/social-user.model";
import { CreateSocialUserDto } from "./dto/create-social-user.dto";
import { UpdateSocialUserDto } from "./dto/update-social-user.dto";

@Injectable()
export class SocialUserService {
  constructor(
    @InjectModel(SocialUser) private socialUserModel: typeof SocialUser
  ) {}

  create(createSocialUserDto: CreateSocialUserDto) {
    return this.socialUserModel.create(createSocialUserDto);
  }

  findAll() {
    return this.socialUserModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id}`;
  }

  update(id: number, updateSocialUserDto: UpdateSocialUserDto) {
    return `This action updates a #${id}`;
  }

  remove(id: number) {
    return `This action removes a #${id}`;
  }
}
