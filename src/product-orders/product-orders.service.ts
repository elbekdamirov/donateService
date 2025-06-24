import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProductOrder } from "./models/product-order.model";
import { CreateProductOrderDto } from "./dto/create-product-order.dto";
import { UpdateProductOrderDto } from "./dto/update-product-order.dto";

@Injectable()
export class ProductOrdersService {
  constructor(
    @InjectModel(ProductOrder)
    private readonly productOrderModel: typeof ProductOrder
  ) {}

  async create(createProductOrderDto: CreateProductOrderDto) {
    return this.productOrderModel.create(createProductOrderDto);
  }

  async findAll() {
    return this.productOrderModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const order = await this.productOrderModel.findByPk(id, {
      include: { all: true },
    });
    if (!order) {
      throw new NotFoundException(`ProductOrder #${id} not found`);
    }
    return order;
  }

  async update(id: number, updateProductOrderDto: UpdateProductOrderDto) {
    const order = await this.findOne(id);
    await order.update(updateProductOrderDto);
    return order;
  }

  async remove(id: number) {
    const order = await this.findOne(id);
    await order.destroy();
    return { message: `ProductOrder #${id} deleted successfully` };
  }
}
