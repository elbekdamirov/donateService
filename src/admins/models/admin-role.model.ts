import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Admins } from "./admins.model";
import { Role } from "../../roles/models/role.model";

interface IAdminRoleCreationAttr {
  adminId: number;
  roleId: number;
}

@Table({ tableName: "admin-role" })
export class AdminRole extends Model<AdminRole, IAdminRoleCreationAttr> {
  @ForeignKey(() => Admins)
  @Column({
    type: DataType.INTEGER,
  })
  declare adminId: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  declare roleId: number;
}
