import { Module } from "@nestjs/common";
import { ProductOrdersService } from "./product-orders.service";
import { ProductOrdersController } from "./product-orders.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductOrder } from "./models/product-order.model";

@Module({
  imports: [SequelizeModule.forFeature([ProductOrder])],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
})
export class ProductOrdersModule {}
