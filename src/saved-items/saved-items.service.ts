import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateSavedItemDto } from "./dto/create-saved-item.dto";
import { UpdateSavedItemDto } from "./dto/update-saved-item.dto";
import { SavedItem } from "./models/saved-item.model";

@Injectable()
export class SavedItemsService {
  constructor(
    @InjectModel(SavedItem) private readonly savedItemModel: typeof SavedItem
  ) {}

  async create(createSavedItemDto: CreateSavedItemDto) {
    return this.savedItemModel.create(createSavedItemDto);
  }

  async findAll() {
    return this.savedItemModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const item = await this.savedItemModel.findByPk(id, {
      include: { all: true },
    });
    if (!item) {
      throw new NotFoundException(`SavedItem #${id} not found`);
    }
    return item;
  }

  async update(id: number, updateSavedItemDto: UpdateSavedItemDto) {
    const item = await this.findOne(id);
    await item.update(updateSavedItemDto);
    return item;
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    await item.destroy();
    return { message: `SavedItem with ${id} deleted` };
  }
}
