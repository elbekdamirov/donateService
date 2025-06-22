import { IsNumber, IsString, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductImageDto {
  @ApiProperty({ example: 1, description: "ID of the associated product" })
  @IsNumber()
  productId: number;

  @ApiProperty({
    example: "https://example.com/image.png",
    description: "URL of the product image",
  })
  @IsString()
  image_url: string;

  @ApiProperty({
    example: true,
    description: "Whether this image is the main one for the product",
  })
  @IsBoolean()
  is_main: boolean;
}
