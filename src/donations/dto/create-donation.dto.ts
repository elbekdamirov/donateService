import { IsNumber, IsString, IsBoolean, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentMethod } from "../models/donation.model";

export class CreateDonationDto {
  @ApiProperty({
    example: 1000,
    description: "Donation amount in the smallest currency units (e.g., cents)",
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    example: "Keep up the great work!",
    description: "A message from the supporter",
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: "card",
    description: "Payment method used for the donation",
  })
  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;

  @ApiProperty({
    example: false,
    description: "Whether the donation is anonymous",
  })
  @IsBoolean()
  is_anonymous: boolean;

  @ApiProperty({
    example: 1,
    description: "ID of the supporter making the donation",
  })
  @IsNumber()
  supporterId: number;

  @ApiProperty({
    example: 1,
    description: "ID of the creator receiving the donation",
  })
  @IsNumber()
  creatorId: number;
}
