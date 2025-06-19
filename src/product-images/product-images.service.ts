import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";
import { ProductImage } from "./models/product-image.model";

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectModel(ProductImage) private productImageModel: typeof ProductImage
  ) {}

  async create(createProductImageDto: CreateProductImageDto) {
    return await this.productImageModel.create(createProductImageDto);
  }

  async findAll() {
    return await this.productImageModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const image = await this.productImageModel.findByPk(id, {
      include: { all: true },
    });
    if (!image) {
      throw new NotFoundException(`ProductImage with id ${id} not found`);
    }
    return image;
  }

  async update(id: number, updateDto: UpdateProductImageDto) {
    const image = await this.productImageModel.findByPk(id);
    if (!image) {
      throw new NotFoundException(`ProductImage with id ${id} not found`);
    }
    await image.update(updateDto);
    return image;
  }

  async remove(id: number) {
    const image = await this.productImageModel.findByPk(id);
    if (!image) {
      throw new NotFoundException(`ProductImage with id ${id} not found`);
    }
    await image.destroy();
    return { message: `ProductImage with id ${id} deleted` };
  }
}
