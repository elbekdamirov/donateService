import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { ProductImagesService } from "./product-images.service";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("product-images")
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  create(
    @Body() createProductImageDto: CreateProductImageDto,
    @UploadedFile() image: any
  ) {
    return this.productImagesService.create(createProductImageDto, image);
  }

  @Get()
  findAll() {
    return this.productImagesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productImagesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProductImageDto: UpdateProductImageDto
  ) {
    return this.productImagesService.update(+id, updateProductImageDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productImagesService.remove(+id);
  }
}
