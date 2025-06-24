import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateWithdrawDto } from "./dto/create-withdraw.dto";
import { UpdateWithdrawDto } from "./dto/update-withdraw.dto";
import { Withdraw } from "./model/withdraw.model";

@Injectable()
export class WithdrawsService {
  constructor(
    @InjectModel(Withdraw) private readonly withdrawModel: typeof Withdraw
  ) {}

  async create(createWithdrawDto: CreateWithdrawDto) {
    return this.withdrawModel.create(createWithdrawDto);
  }

  async findAll() {
    return this.withdrawModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const withdraw = await this.withdrawModel.findByPk(id, {
      include: { all: true },
    });
    if (!withdraw) {
      throw new NotFoundException(`Withdraw #${id} not found`);
    }
    return withdraw;
  }

  async update(id: number, updateWithdrawDto: UpdateWithdrawDto) {
    const withdraw = await this.findOne(id);
    await withdraw.update(updateWithdrawDto);
    return withdraw;
  }

  async remove(id: number) {
    const withdraw = await this.findOne(id);
    await withdraw.destroy();
    return { message: `Withdraw #${id} deleted successfully` };
  }
}
