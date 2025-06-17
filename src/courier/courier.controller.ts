import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CourierService } from "./courier.service";
import { CreateCourierDto } from "./dto/create-courier.dto";
import { Courier } from "./models/courier.model";
import { UpdateCourierDto } from "./dto/update-courier.dto";

@Controller("courier")
export class CourierController {
  constructor(private readonly courierService: CourierService) {}

  @Post()
  async createCourier(
    @Body() createCourierDto: CreateCourierDto
  ): Promise<Courier> {
    return this.courierService.createCourier(createCourierDto);
  }

  @Get()
  async findAllCourier(): Promise<Courier[]> {
    return this.courierService.getAllCourier();
  }

  @Get(":id")
  async getCourierById(@Param("id") id: number): Promise<Courier | null> {
    return this.courierService.getCourierById(id);
  }

  @Delete(":id")
  async deleteCourierById(@Param("id") id: number): Promise<string> {
    return this.courierService.deleteCourierById(id);
  }

  @Patch(":id")
  async updateCourierById(
    @Param("id") id: number,
    @Body() updateCourierDto: UpdateCourierDto
  ): Promise<any> {
    return this.courierService.updateCourierById(id, updateCourierDto);
  }
}
