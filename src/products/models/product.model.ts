import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Categories } from "../../categories/models/categories.model";
import { ProductImage } from "../../product-images/models/product-image.model";

interface IProductCreationAttr {
  name: string;
  description: string;
  images_count: number;
  in_stock: number;
  is_available: boolean;
  price: number;
  creatorId: number;
  categoryId: number;
}

@Table({ tableName: "products" })
export class Product extends Model<Product, IProductCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare images_count: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare in_stock: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare is_available: boolean;

  @Column({
    type: DataType.DECIMAL(10, 2),
  })
  declare price: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare creatorId: number;

  @BelongsTo(() => Users)
  declare creator: Users;

  @ForeignKey(() => Categories)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare categoryId: number;

  @BelongsTo(() => Categories)
  declare category: Categories;

  @HasMany(() => ProductImage)
  declare productImages: ProductImage[];
}
