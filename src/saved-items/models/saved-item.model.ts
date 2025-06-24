import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Product } from "../../products/models/product.model";

export interface ISavedItemCreationAttr {
  userId: number;
  productId: number;
}

@Table({ tableName: "saved_items" })
export class SavedItem extends Model<SavedItem, ISavedItemCreationAttr> {
  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare userId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare productId: number;

  @BelongsTo(() => Users)
  declare user: Users;

  @BelongsTo(() => Product)
  declare product: Product;
}
