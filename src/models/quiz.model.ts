import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Quiz } from '@interfaces/quiz.interface';

export type QuizCreationAttributes = Optional<Quiz, 'quizId' | 'userId' | 'categoryId' | 'quizName' | 'questionType' | 'quizLink'>;

export class QuizModel extends Model<Quiz, QuizCreationAttributes> implements Quiz {
  public quizId: number;
  public userId: number;
  public categoryId: number;
  public quizName: string;
  public questionType: string;
  public quizLink: string;
}

export default function (sequelize: Sequelize): typeof QuizModel {
  QuizModel.init(
    {
      quizId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quizName: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      questionType: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      quizLink: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'quiz',
      sequelize,
    },
  );

  return QuizModel;
}
