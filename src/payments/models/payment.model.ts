import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { ProductOrder } from "../../product-orders/models/product-order.model";
import { Users } from "../../users/models/user.model";

export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  PAYME = "PAYME",
  CLICK = "CLICK",
  UZUM = "UZUM",
}

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  FAILED = "FAILED",
}

export interface IPaymentCreationAttr {
  payment_method: PaymentMethod;
  status: PaymentStatus;
  paid_at: Date;
  orderId: number;
  userId: number;
}

@Table({ tableName: "payments" })
export class Payment extends Model<Payment, IPaymentCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
    allowNull: false,
  })
  declare payment_method: PaymentMethod;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentStatus)),
    allowNull: false,
  })
  declare status: PaymentStatus;

  @Column({ type: DataType.DATE, allowNull: false })
  declare paid_at: Date;

  @ForeignKey(() => ProductOrder)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare orderId: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare userId: number;

  @BelongsTo(() => ProductOrder)
  declare order: ProductOrder;

  @BelongsTo(() => Users)
  declare user: Users;
}
