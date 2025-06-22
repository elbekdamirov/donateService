import { IsString, IsNumber, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ example: "Smartphone", description: "Name of the product" })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Latest model smartphone with advanced features",
    description: "Description of the product",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 5,
    description: "Number of images associated with the product",
  })
  @IsNumber()
  images_count: number;

  @ApiProperty({ example: 100, description: "Number of units in stock" })
  @IsNumber()
  in_stock: number;

  @ApiProperty({
    example: true,
    description: "Whether the product is available for sale",
  })
  @IsBoolean()
  is_available: boolean;

  @ApiProperty({ example: 499.99, description: "Price of the product" })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 1,
    description: "ID of the creator (user) who added the product",
  })
  @IsNumber()
  creatorId: number;

  @ApiProperty({
    example: 1,
    description: "ID of the category the product belongs to",
  })
  @IsNumber()
  categoryId: number;
}
