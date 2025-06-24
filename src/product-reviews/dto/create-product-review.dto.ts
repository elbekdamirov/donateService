import { IsInt, IsString, Min, Max, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductReviewDto {
  @ApiProperty({ example: 5, description: "Rating (1-5)" })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    example: "Excellent quality and fast delivery.",
    description: "Review comment",
  })
  @IsString()
  comment: string;

  @ApiProperty({
    example: 1,
    description: "ID of the order associated with this review",
  })
  @IsInt()
  @IsPositive()
  orderId: number;

  @ApiProperty({ example: 10, description: "ID of the product being reviewed" })
  @IsInt()
  @IsPositive()
  productId: number;

  @ApiProperty({
    example: 3,
    description: "ID of the user submitting the review",
  })
  @IsInt()
  @IsPositive()
  userId: number;
}
