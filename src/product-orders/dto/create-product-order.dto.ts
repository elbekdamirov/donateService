import { IsNumber, IsInt, IsPositive, IsString, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "../models/product-order.model";

export class CreateProductOrderDto {
  @ApiProperty({ example: 2, description: "Quantity of the products ordered" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  quantity: number;

  @ApiProperty({ example: 100000, description: "Total price for the order" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  total_price: number;

  @ApiProperty({
    example: OrderStatus.PENDING,
    enum: OrderStatus,
    description: "Order status",
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @ApiProperty({
    example: "123 Main St, City",
    description: "Delivery address for the order",
  })
  @IsString()
  delivery_address: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Phone number of the recipient",
  })
  @IsString()
  phone_number: string;

  @ApiProperty({ example: 1, description: "ID of the assigned courier" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  courierId: number;

  @ApiProperty({ example: 5, description: "ID of the buyer" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  buyerId: number;

  @ApiProperty({ example: 10, description: "ID of the ordered product" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  productId: number;
}
