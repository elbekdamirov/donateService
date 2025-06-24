import { IsDateString, IsEnum, IsInt, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentMethod, PaymentStatus } from "../models/payment.model";

export class CreatePaymentDto {
  @ApiProperty({
    example: PaymentMethod.CREDIT_CARD,
    enum: PaymentMethod,
    description: "Payment method used for the transaction",
  })
  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;

  @ApiProperty({
    example: PaymentStatus.PENDING,
    enum: PaymentStatus,
    description: "Current status of the payment",
  })
  @IsEnum(PaymentStatus)
  status: PaymentStatus;

  @ApiProperty({
    example: "2025-06-24T08:30:00Z",
    description: "Date and time when the payment was made",
  })
  @IsDateString()
  paid_at: Date;

  @ApiProperty({ example: 1, description: "ID of the associated order" })
  @IsInt()
  @IsPositive()
  orderId: number;

  @ApiProperty({ example: 1, description: "ID of the user making the payment" })
  @IsInt()
  @IsPositive()
  userId: number;
}
