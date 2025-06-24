import { IsNumber, IsPositive, IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCreatorStatisticDto {
  @ApiProperty({
    example: 100,
    description: "Total number of donations received",
  })
  @IsNumber()
  @IsPositive()
  total_donations: number;

  @ApiProperty({ example: 25, description: "Total number of supporters" })
  @IsNumber()
  @IsInt()
  @IsPositive()
  total_supporters: number;

  @ApiProperty({
    example: 1,
    description: "ID of the creator associated with the statistics",
  })
  @IsNumber()
  @IsInt()
  @IsPositive()
  creatorId: number;
}
