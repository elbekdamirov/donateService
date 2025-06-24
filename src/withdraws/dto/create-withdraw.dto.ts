import { IsEnum, IsInt, IsPositive, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { WithdrawStatus } from "../model/withdraw.model";

export class CreateWithdrawDto {
  @ApiProperty({
    example: 100000,
    description: "The amount requested for withdrawal",
  })
  @IsInt()
  @IsPositive()
  amount: number;

  @ApiProperty({
    example: WithdrawStatus.PENDING,
    enum: WithdrawStatus,
    description: "The status of the withdrawal request",
  })
  @IsEnum(WithdrawStatus)
  status: WithdrawStatus;

  @ApiProperty({
    example: 5000,
    description: "Site fee charged for the withdrawal",
  })
  @IsNumber()
  site_fee: number;

  @ApiProperty({
    example: 1,
    description: "ID of the creator making the withdrawal request",
  })
  @IsInt()
  @IsPositive()
  creatorId: number;
}
