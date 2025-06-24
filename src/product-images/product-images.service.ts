import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateProductImageDto } from "./dto/create-product-image.dto";
import { UpdateProductImageDto } from "./dto/update-product-image.dto";
import { ProductImage } from "./models/product-image.model";
import { FilesService } from "../files/files.service";

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectModel(ProductImage) private productImageModel: typeof ProductImage,
    private readonly fileService: FilesService
  ) {}

  async create(createProductImageDto: CreateProductImageDto, image: any) {
    const fileName = await this.fileService.saveFile(image);

    return await this.productImageModel.create({
      ...createProductImageDto,
      image: fileName,
    });
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
