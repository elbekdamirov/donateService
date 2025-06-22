import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "admin", description: "Name of the role" })
  @IsString()
  name: string;

  @ApiProperty({
    example: "Has full access to the system",
    description: "Description of the role",
  })
  @IsString()
  description: string;
}
