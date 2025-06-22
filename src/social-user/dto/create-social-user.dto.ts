import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSocialUserDto {
  @ApiProperty({ example: 1, description: "ID of the creator" })
  @IsNumber()
  creatorId: number;

  @ApiProperty({ example: 1, description: "ID of the social network" })
  @IsNumber()
  socialId: number;

  @ApiProperty({
    example: "https://twitter.com/user",
    description: "URL of the user’s social profile",
  })
  @IsString()
  url: string;
}
