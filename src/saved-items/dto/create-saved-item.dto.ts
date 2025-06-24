import { IsNumber, IsInt, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSavedItemDto {
  @ApiProperty({ example: 1, description: "ID of the user saving the item" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  userId: number;

  @ApiProperty({ example: 42, description: "ID of the product being saved" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  productId: number;
}
