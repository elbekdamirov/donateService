import { Injectable } from "@nestjs/common";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Donations } from "./models/donation.model";

@Injectable()
export class DonationsService {
  constructor(
    @InjectModel(Donations) private donationModel: typeof Donations
  ) {}

  async create(createDonationDto: CreateDonationDto) {
    return this.donationModel.create(createDonationDto);
  }

  findAll() {
    return this.donationModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.donationModel.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    const machine = await this.donationModel.update(updateDonationDto, {
      where: { id },
      returning: true,
    });
    return machine[1][0];
  }

  async remove(id: number) {
    const res = await this.donationModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id}-machine o'chirildi`;
    }

    return `${id} - machine yo'q`;
  }
}
