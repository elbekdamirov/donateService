import { Module } from "@nestjs/common";
import { ProductReviewsService } from "./product-reviews.service";
import { ProductReviewsController } from "./product-reviews.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductReview } from "./models/product-review.model";

@Module({
  imports: [SequelizeModule.forFeature([ProductReview])],
  controllers: [ProductReviewsController],
  providers: [ProductReviewsService],
})
export class ProductReviewsModule {}
