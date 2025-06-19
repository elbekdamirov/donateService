import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./models/product.model";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productModel.create(createProductDto);
  }

  async findAll() {
    return await this.productModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const product = await this.productModel.findByPk(id, {
      include: { all: true },
    });
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    await product.update(updateProductDto);
    return product;
  }

  async remove(id: number) {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    await product.destroy();
    return { message: `Product with id ${id} removed successfully` };
  }
}
