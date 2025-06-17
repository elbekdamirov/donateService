import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ISocialCreationAttr {
  name: string;
  icon: string;
}

@Table({ tableName: "social", timestamps: true })
export class Social extends Model<Social, ISocialCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  icon: string;
}
