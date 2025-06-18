import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Social } from "../../social/models/social.model";
import { SocialUser } from "../../social-user/models/social-user.model";

export enum UserRole {
  CREATOR = "creator",
  USER = "user",
}

interface IUserCreationAttr {
  full_name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  bio: string;
  avatar_url: string;
  banner_url: string;
}

@Table({ tableName: "users", timestamps: true })
export class Users extends Model<Users, IUserCreationAttr> {
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
    type: DataType.ENUM(...Object.values(UserRole)),
    allowNull: false,
    defaultValue: UserRole.USER,
  })
  role: UserRole;

  @Column({
    type: DataType.TEXT,
  })
  bio: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  avatar_url: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  banner_url: string;

  @BelongsToMany(() => Social, () => SocialUser)
  socail: Social[];
}
