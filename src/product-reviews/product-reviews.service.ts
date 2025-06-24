import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ProductReview } from "./models/product-review.model";
import { CreateProductReviewDto } from "./dto/create-product-review.dto";
import { UpdateProductReviewDto } from "./dto/update-product-review.dto";

@Injectable()
export class ProductReviewsService {
  constructor(
    @InjectModel(ProductReview)
    private readonly reviewModel: typeof ProductReview
  ) {}

  async create(createProductReviewDto: CreateProductReviewDto) {
    return this.reviewModel.create(createProductReviewDto);
  }

  async findAll() {
    return this.reviewModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const review = await this.reviewModel.findByPk(id, {
      include: { all: true },
    });
    if (!review) {
      throw new NotFoundException(`ProductReview #${id} not found`);
    }
    return review;
  }

  async update(id: number, updateProductReviewDto: UpdateProductReviewDto) {
    const review = await this.findOne(id);
    await review.update(updateProductReviewDto);
    return review;
  }

  async remove(id: number) {
    const review = await this.findOne(id);
    await review.destroy();
    return { message: `ProductReview #${id} deleted successfully` };
  }
}
