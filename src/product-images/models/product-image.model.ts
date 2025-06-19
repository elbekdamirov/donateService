import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Product } from "../../products/models/product.model";

interface IProductImageCreationAttr {
  productId: number;
  image_url: string;
  is_main: boolean;
}

@Table({ tableName: "product_images", timestamps: true })
export class ProductImage extends Model<
  ProductImage,
  IProductImageCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare productId: number;

  @BelongsTo(() => Product)
  declare product: Product;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image_url: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_main: boolean;
}
