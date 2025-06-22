import { IsString, IsNotEmpty, IsBoolean, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleType } from "../models/courier.model";

export class CreateCourierDto {
  @ApiProperty({ example: "John Doe", description: "Full name of the courier" })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "+1234567890",
    description: "Phone number of the courier",
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({ example: "motorbike", description: "Type of vehicle (enum)" })
  @IsEnum(VehicleType)
  vehicle_type: VehicleType;

  @ApiProperty({ example: "AB1234", description: "Vehicle plate number" })
  @IsString()
  @IsNotEmpty()
  vehicle_plate_number: string;

  @ApiProperty({ example: true, description: "Whether the courier is active" })
  @IsBoolean()
  is_active: boolean;
}
