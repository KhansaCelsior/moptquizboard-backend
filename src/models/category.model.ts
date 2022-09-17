import { QuizModel } from './quiz.model';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Category } from '@interfaces/category.interface';

export type CategoryCreationAttributes = Optional<Category, 'categoryid' | 'categoryname'>;

export class CategoryModel extends Model<Category, CategoryCreationAttributes> implements Category {
  public categoryid: number;
  public categoryname: string;
}

export default function (sequelize: Sequelize): typeof CategoryModel {
  CategoryModel.init(
    {
      categoryid: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryname: {
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
// CategoryModel.belongsToMany(QuizModel, {
//   through: 'quizCategory'
// });
