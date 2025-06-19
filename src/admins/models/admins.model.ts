import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "../../roles/models/role.model";
import { AdminRole } from "./admin-role.model";

interface IAdminCreationAttr {
  full_name: string;
  email: string;
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
    type: DataType.STRING,
    allowNull: false,
  })
  password_hash: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_active: boolean;

  @BelongsToMany(() => Role, () => AdminRole)
  roles: Role[];
}
