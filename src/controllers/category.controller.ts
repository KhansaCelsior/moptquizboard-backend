import { NextFunction, Request, Response } from 'express';
import { CreateCategoryDto } from '@dtos/category.dto';
import { Category } from '@interfaces/category.interface';
import CategoryService from '@services/category.service';

class CategoryController {
  public categoryService = new CategoryService();
  public getCategorys = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllCategory: Category[] = await this.categoryService.getAllCategorys();

      res.status(200).json({ data: findAllCategory, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categoryData: CreateCategoryDto = req.body;
      const createUserData: Category = await this.categoryService.createCategory(categoryData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default CategoryController;
