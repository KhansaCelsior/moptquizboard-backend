import DB from '@databases';
import { CreateCategoryDto } from '@dtos/category.dto';
import { HttpException } from '@exceptions/HttpException';
import { Category } from '@interfaces/category.interface';
import { isEmpty } from '@utils/util';

class CategoryService {
  public categorys = DB.category;

  public async getAllCategorys(): Promise<Category[]> {
    const allCategory: Category[] = await this.categorys.findAll();
    return allCategory;
  }

  public async createCategory(categoryData: CreateCategoryDto[]): Promise<Category> {
    if (isEmpty(categoryData)) throw new HttpException(400, 'categoryData is empty');
    const createCategoryData = await this.categorys.create({ ...categoryData });

    return createCategoryData;
  }
}

export default CategoryService;
