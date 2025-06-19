import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Admins } from "../../admins/models/admins.model";
import { AdminRole } from "../../admins/models/admin-role.model";

interface IRoleCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.TEXT,
  })
  declare description: string;

  @BelongsToMany(() => Admins, () => AdminRole)
  users: Admins[];
}
