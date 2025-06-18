import { UserRole } from "../models/user.model";

export class CreateUserDto {
  full_name: string;
  email: string;
  password_hash: string;
  role: UserRole;
  bio: string;
  avatar_url: string;
  banner_url: string;
}
