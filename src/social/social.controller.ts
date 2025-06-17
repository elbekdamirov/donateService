import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { SocialService } from "./social.service";
import { CreateSocialDto } from "./dto/create-social.dto";
import { Social } from "./models/social.model";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Controller("social")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  async createSocial(
    @Body() createSocialDto: CreateSocialDto
  ): Promise<Social> {
    return this.socialService.createSocial(createSocialDto);
  }

  @Get()
  async findAllSocial(): Promise<Social[]> {
    return this.socialService.getAllSocial();
  }

  @Get(":id")
  async getSocialById(@Param("id") id: number): Promise<Social | null> {
    return this.socialService.getSocialById(id);
  }

  @Delete(":id")
  async deleteSocialById(@Param("id") id: number): Promise<string> {
    return this.socialService.deleteSocialById(id);
  }

  @Patch(":id")
  async updateSocialById(
    @Param("id") id: number,
    @Body() updatesocialdto: UpdateSocialDto
  ): Promise<any> {
    return this.socialService.updateSocialById(id, updatesocialdto);
  }
}
