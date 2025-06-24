import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

interface ICreatorStatisticCreationAttr {
  total_donations: number;
  total_supporters: number;
  creatorId: number;
}

@Table({ tableName: "creator_statistics" })
export class CreatorStatistic extends Model<
  CreatorStatistic,
  ICreatorStatisticCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare total_donations: number;

  @Column({
    type: DataType.INTEGER,
  })
  declare total_supporters: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER, onDelete: "CASCADE" })
  declare creatorId: number;

  @BelongsTo(() => Users)
  declare creator: Users;
}
