import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSocialDto {
  @ApiProperty({
    example: "Twitter",
    description: "Name of the social network",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "https://example.com/icon.png",
    description: "URL of the icon for the social network",
  })
  @IsString()
  icon: string;
}
