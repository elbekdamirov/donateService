import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Product } from "../../products/models/product.model";
import { ProductOrder } from "../../product-orders/models/product-order.model";
import { Users } from "../../users/models/user.model";

export interface IProductReviewCreationAttr {
  rating: number;
  comment: string;
  orderId: number;
  productId: number;
  userId: number;
}

@Table({ tableName: "product_reviews" })
export class ProductReview extends Model<
  ProductReview,
  IProductReviewCreationAttr
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare rating: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare comment: string;

  @ForeignKey(() => ProductOrder)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare orderId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare productId: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare userId: number;

  @BelongsTo(() => ProductOrder)
  declare order: ProductOrder;

  @BelongsTo(() => Product)
  declare product: Product;

  @BelongsTo(() => Users)
  declare user: Users;
}
