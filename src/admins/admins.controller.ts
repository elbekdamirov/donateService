import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { Admins } from "./models/admins.model";
import { UpdateAdminDto } from "./dto/update-admin.dto";

@Controller("admins")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async createAdmins(@Body() createAdminDto: CreateAdminDto): Promise<Admins> {
    return this.adminsService.createAdmins(createAdminDto);
  }

  @Get()
  async findAllAdmins(): Promise<Admins[]> {
    return this.adminsService.getAllAdmins();
  }

  @Get(":id")
  async getAdminsById(@Param("id") id: number): Promise<Admins | null> {
    return this.adminsService.getAdminsById(id);
  }

  @Delete(":id")
  async deleteAdminsById(@Param("id") id: number): Promise<string> {
    return this.adminsService.deleteAdminsById(id);
  }

  @Patch(":id")
  async updateAdminsById(
    @Param("id") id: number,
    @Body() updateAdminDto: UpdateAdminDto
  ): Promise<any> {
    return this.adminsService.updateAdminsById(id, updateAdminDto);
  }
}
