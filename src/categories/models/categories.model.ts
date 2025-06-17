import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICategoriesCreationAttr {
  name: string;
}

@Table({ tableName: "categories", timestamps: true })
export class Categories extends Model<Categories, ICategoriesCreationAttr> {
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
}
