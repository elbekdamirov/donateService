import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

export enum WithdrawStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export interface IWithdrawCreationAttr {
  amount: number;
  status: WithdrawStatus;
  site_fee: number;
  creatorId: number;
}

@Table({ tableName: "withdraws" })
export class Withdraw extends Model<Withdraw, IWithdrawCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare amount: number;

  @Column({
    type: DataType.ENUM(...Object.values(WithdrawStatus)),
    allowNull: false,
  })
  declare status: WithdrawStatus;

  @Column({ type: DataType.FLOAT, allowNull: false })
  declare site_fee: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE" })
  declare creatorId: number;

  @BelongsTo(() => Users, "creatorId")
  declare creator: Users;
}
