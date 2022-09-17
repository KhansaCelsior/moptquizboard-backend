import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Category } from '@interfaces/category.interface';

export type CategoryCreationAttributes = Optional<Category, 'categoryId' | 'categoryName'>;

export class CategoryModel extends Model<Category, CategoryCreationAttributes> implements Category {
  public categoryId: number;
  public categoryName: string;
}

export default function (sequelize: Sequelize): typeof CategoryModel {
  CategoryModel.init(
    {
      categoryId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryName: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'category',
      sequelize,
    },
  );

  return CategoryModel;
}
