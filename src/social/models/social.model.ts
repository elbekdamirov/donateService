import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { SocialUser } from "../../social-user/models/social-user.model";

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

  @BelongsToMany(() => Users, () => SocialUser)
  users: Users[];
}
