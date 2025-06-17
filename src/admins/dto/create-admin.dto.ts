import { AdminRoles } from "../models/admins.model";

export class CreateAdminDto {
  full_name: string;
  email: string;
  role: AdminRoles;
  password_hash: string;
  is_active: boolean;
}
