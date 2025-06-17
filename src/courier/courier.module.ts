import { Module } from "@nestjs/common";
import { CourierController } from "./courier.controller";
import { CourierService } from "./courier.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Courier } from "./models/courier.model";

@Module({
  imports: [SequelizeModule.forFeature([Courier])],
  controllers: [CourierController],
  providers: [CourierService],
})
export class CourierModule {}
