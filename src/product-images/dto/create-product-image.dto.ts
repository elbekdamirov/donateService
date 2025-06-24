import { IsNumber, IsString, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateProductImageDto {
  @ApiProperty({ example: 1, description: "ID of the associated product" })
  @Type(() => Number)
  @IsNumber()
  productId: number;

  @ApiProperty({
    example: true,
    description: "Whether this image is the main one for the product",
  })
  @Type(() => Boolean)
  @IsBoolean()
  is_main: boolean;
}
