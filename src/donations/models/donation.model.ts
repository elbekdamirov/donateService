import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

export enum PaymentMethod {
  CLICK = "click",
  PAYME = "payme",
  CARD = "card",
  OTHER = "other",
}

interface IDonationCreationAttr {
  amount: number;
  message: string;
  payment_method: PaymentMethod;
  is_anonymous: boolean;
  supporterId: number;
  creatorId: number;
}

@Table({ tableName: "donations", timestamps: true })
export class Donations extends Model<Donations, IDonationCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  declare amount: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  declare message: string | null;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethod)),
    allowNull: false,
  })
  declare payment_method: PaymentMethod;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  declare is_anonymous: boolean;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
  })
  declare supporterId: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
  })
  declare creatorId: number;

  @BelongsTo(() => Users, "supporterId")
  declare supporter: Users;

  @BelongsTo(() => Users, "creatorId")
  declare creator: Users;
}
