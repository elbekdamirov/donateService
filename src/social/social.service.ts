import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Social } from "./models/social.model";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Injectable()
export class SocialService {
  constructor(@InjectModel(Social) private socialModel: typeof Social) {}

  async createSocial(createSocialDto: CreateSocialDto): Promise<Social> {
    const social = await this.socialModel.create(createSocialDto);

    return social;
  }

  async getAllSocial(): Promise<Social[]> {
    return this.socialModel.findAll();
  }

  async getSocialById(id: number): Promise<Social | null> {
    return this.socialModel.findByPk(id);
  }

  async deleteSocialById(id: number): Promise<string> {
    const res = await this.socialModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id} - social o'chirildi`;
    }
    return `${id} - social yo'q`;
  }

  async updateSocialById(id: number, updateSocialDto: UpdateSocialDto) {
    const social = await this.socialModel.update(updateSocialDto, {
      where: { id },
      returning: true,
    });
    return social[1][0];
  }
}
