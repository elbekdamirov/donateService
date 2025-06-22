import { IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateNotificationDto {
  @ApiProperty({
    example: "Your order has been shipped",
    description: "Notification message",
  })
  @IsString()
  message: string;

  @ApiProperty({ example: 1, description: "ID of the user to notify" })
  @IsNumber()
  userId: number;
}
