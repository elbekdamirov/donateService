import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { Categories } from "./models/categories.model";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async createCategory(
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<Categories> {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @Get()
  async findAllCategories(): Promise<Categories[]> {
    return this.categoriesService.getAllCategories();
  }

  @Get(":id")
  async getCategoryById(@Param("id") id: number): Promise<Categories | null> {
    return this.categoriesService.getCategoryById(id);
  }

  @Delete(":id")
  async deleteCategoryById(@Param("id") id: number): Promise<string> {
    return this.categoriesService.deleteCategoryById(id);
  }

  @Patch(":id")
  async updateCategoryById(
    @Param("id") id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<any> {
    return this.categoriesService.updateCategoryById(id, updateCategoryDto);
  }
}
