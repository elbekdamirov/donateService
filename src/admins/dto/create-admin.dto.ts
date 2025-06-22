import {
  IsString,
  IsEmail,
  IsBoolean,
  MinLength,
  IsNotEmpty,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({ example: "John Doe", description: "Full name of the admin" })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "admin@example.com",
    description: "Email address of the admin",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "hashed_password_here",
    description: "Hashed password for the admin",
  })
  @IsString()
  @IsNotEmpty()
  password_hash: string;

  @ApiProperty({ example: true, description: "Whether the admin is active" })
  @IsBoolean()
  is_active: boolean;

  @ApiProperty({ example: "admin", description: "Admin username" })
  @IsString()
  @IsNotEmpty()
  name: string;
}
