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
import { Courier } from "../../courier/models/courier.model";

export enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface IProductOrderCreationAttr {
  quantity: number;
  total_price: number;
  status: OrderStatus;
  delivery_address: string;
  phone_number: string;
  courierId: number;
  buyerId: number;
  productId: number;
}

@Table({ tableName: "product_orders" })
export class ProductOrder extends Model<
  ProductOrder,
  IProductOrderCreationAttr
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare quantity: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare total_price: number;

  @Column({
    type: DataType.ENUM("PENDING", "SHIPPED", "DELIVERED", "CANCELLED"),
    allowNull: false,
  })
  declare status: OrderStatus;

  @Column({ type: DataType.STRING, allowNull: false })
  declare delivery_address: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare phone_number: string;

  @ForeignKey(() => Courier)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare courierId: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare buyerId: number;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare productId: number;

  @BelongsTo(() => Courier, "courierId")
  declare courier: Courier;

  @BelongsTo(() => Users, "buyerId")
  declare buyer: Users;

  @BelongsTo(() => Product)
  declare product: Product;
}
