import { IsString, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "Electronics", description: "Name of the category" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
