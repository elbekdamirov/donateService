import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

interface INotificationCreationAttr {
  message: string;
  userId: number;
}

@Table({ tableName: "notifications", timestamps: true })
export class Notifications extends Model<
  Notifications,
  INotificationCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  declare message: string;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: "CASCADE",
  })
  declare userId: number;

  @BelongsTo(() => Users)
  declare user: Users;
}
