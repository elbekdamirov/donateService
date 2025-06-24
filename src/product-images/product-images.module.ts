import { Module } from "@nestjs/common";
import { ProductImagesService } from "./product-images.service";
import { ProductImagesController } from "./product-images.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductImage } from "./models/product-image.model";
import { FilesModule } from "../files/files.module";

@Module({
  imports: [SequelizeModule.forFeature([ProductImage]), FilesModule],
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
})
export class ProductImagesModule {}
