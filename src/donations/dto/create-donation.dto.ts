import { PaymentMethod } from "../models/donation.model";

export class CreateDonationDto {
  amount: number;
  message: string;
  payment_method: PaymentMethod;
  is_anonymous: boolean;
  supporterId: number;
  creatorId: number;
}
