import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCreatorStatisticDto } from "./dto/create-creator-statistic.dto";
import { UpdateCreatorStatisticDto } from "./dto/update-creator-statistic.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CreatorStatistic } from "./models/creator-statistic.model";

@Injectable()
export class CreatorStatisticsService {
  constructor(
    @InjectModel(CreatorStatistic)
    private creatorStatistic: typeof CreatorStatistic
  ) {}

  create(createCreatorStatisticDto: CreateCreatorStatisticDto) {
    return this.creatorStatistic.create(createCreatorStatisticDto);
  }

  findAll() {
    return this.creatorStatistic.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.creatorStatistic.findByPk(id, { include: { all: true } });
  }

  async update(
    id: number,
    updateCreatorStatisticDto: UpdateCreatorStatisticDto
  ) {
    const statistic = await this.creatorStatistic.findByPk(id);

    if (!statistic) {
      throw new NotFoundException(`CreatorStatistic #${id} not found`);
    }

    await statistic.update(updateCreatorStatisticDto);
    return statistic;
  }

  async remove(id: number) {
    const statistic = await this.creatorStatistic.findByPk(id);

    if (!statistic) {
      throw new NotFoundException(`CreatorStatistic #${id} not found`);
    }

    await statistic.destroy();
    return { message: `CreatorStatistic with ${id} deleted` };
  }
}
