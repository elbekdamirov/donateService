import { Module } from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { DonationsController } from "./donations.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Donations } from "./models/donation.model";

@Module({
  imports: [SequelizeModule.forFeature([Donations])],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
