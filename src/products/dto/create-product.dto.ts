export class CreateProductDto {
  name: string;
  description: string;
  images_count: number;
  in_stock: number;
  is_available: boolean;
  price: number;
  creatorId: number;
  categoryId: number;
}
