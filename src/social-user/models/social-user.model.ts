import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Social } from "../../social/models/social.model";
import { Users } from "../../users/models/user.model";

interface ISocialUserCreationAttr {
  creatorId: number;
  socialId: number;
  url: string;
}

@Table({ tableName: "social_user" })
export class SocialUser extends Model<SocialUser, ISocialUserCreationAttr> {
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  creatorId: number;

  @ForeignKey(() => Social)
  @Column({
    type: DataType.INTEGER,
  })
  socialId: number;

  @Column({
    type: DataType.STRING,
  })
  url: string;
}
