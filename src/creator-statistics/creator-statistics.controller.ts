import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatorStatisticsService } from './creator-statistics.service';
import { CreateCreatorStatisticDto } from './dto/create-creator-statistic.dto';
import { UpdateCreatorStatisticDto } from './dto/update-creator-statistic.dto';

@Controller('creator-statistics')
export class CreatorStatisticsController {
  constructor(private readonly creatorStatisticsService: CreatorStatisticsService) {}

  @Post()
  create(@Body() createCreatorStatisticDto: CreateCreatorStatisticDto) {
    return this.creatorStatisticsService.create(createCreatorStatisticDto);
  }

  @Get()
  findAll() {
    return this.creatorStatisticsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creatorStatisticsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreatorStatisticDto: UpdateCreatorStatisticDto) {
    return this.creatorStatisticsService.update(+id, updateCreatorStatisticDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creatorStatisticsService.remove(+id);
  }
}
