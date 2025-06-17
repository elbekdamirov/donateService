import { VehicleType } from "../models/courier.model";

export class UpdateCourierDto {
  full_name?: string;
  phone_number?: string;
  vehicle_type?: VehicleType;
  vehicle_plate_number?: string;
  is_active?: boolean;
}
