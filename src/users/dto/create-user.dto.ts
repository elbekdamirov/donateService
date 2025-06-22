import { IsString, IsEmail, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../models/user.model";

export class CreateUserDto {
  @ApiProperty({ example: "John Doe", description: "Full name of the user" })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "john@example.com",
    description: "Email address of the user",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "hashed_password_here",
    description: "Hashed password for the user",
  })
  @IsString()
  password_hash: string;

  @ApiProperty({ example: "user", description: "User role" })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({
    example: "Software developer",
    description: "Short bio of the user",
  })
  @IsString()
  bio: string;

  @ApiProperty({
    example: "https://example.com/avatar.png",
    description: "URL of the user's avatar",
  })
  @IsString()
  avatar_url: string;

  @ApiProperty({
    example: "https://example.com/banner.png",
    description: "URL of the user's banner",
  })
  @IsString()
  banner_url: string;
}
