import { Column, DataType, Model, Table } from "sequelize-typescript";

export enum AdminRoles {
  SUPERADMIN = "superadmin",
  MODERATOR = "moderator",
}

interface IAdminCreationAttr {
  full_name: string;
  email: string;
  role: AdminRoles;
  password_hash: string;
  is_active: boolean;
}

@Table({ tableName: "admins", timestamps: true })
export class Admins extends Model<Admins, IAdminCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.ENUM(...Object.values(AdminRoles)),
    allowNull: false,
  })
  role: AdminRoles;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password_hash: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;
}
