import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Categories } from "./models/categories.model";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories) private categoryModel: typeof Categories
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto
  ): Promise<Categories> {
    const category = await this.categoryModel.create(createCategoryDto);
    return category;
  }

  async getAllCategories(): Promise<Categories[]> {
    return this.categoryModel.findAll();
  }

  async getCategoryById(id: number): Promise<Categories | null> {
    return this.categoryModel.findByPk(id);
  }

  async deleteCategoryById(id: number): Promise<string> {
    const res = await this.categoryModel.destroy({ where: { id } });

    if (res > 0) {
      return `${id} - category o'chirildi`;
    }
    return `${id} - category topilmadi`;
  }

  async updateCategoryById(
    id: number,
    updateCategoryDto: UpdateCategoryDto
  ): Promise<Categories | null> {
    const categories = await this.categoryModel.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });

    return categories[1][0];
  }
}
