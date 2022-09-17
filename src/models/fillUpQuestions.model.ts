import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { FillUpQuestions } from '@interfaces/fillUpQuestions.interface';

export type FillUpQuestionsCreationAttributes = Optional<FillUpQuestions, 'questionId' | 'quizId' | 'questionType' | 'question' | 'correctAnswer'>;

export class FillUpQuestionsModel extends Model<FillUpQuestions, FillUpQuestionsCreationAttributes> implements FillUpQuestions {
  public questionId: number;
  public quizId: number;
  public questionType: string;
  public question: string;
  public correctAnswer: string;
}

export default function (sequelize: Sequelize): typeof FillUpQuestionsModel {
  FillUpQuestionsModel.init(
    {
      questionId: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quizId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      questionType: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      question: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      correctAnswer: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'FillUpQuestions',
      sequelize,
    },
  );

  return FillUpQuestionsModel;
}
