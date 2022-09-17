import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { TfQuestions } from '@interfaces/tfQuestions.interface';

export type TfQuestionsCreationAttributes = Optional<TfQuestions, 'questionId' | 'quizId' | 'questionType' | 'question' | 'correctAnswer'>;

export class TfQuestionsModel extends Model<TfQuestions, TfQuestionsCreationAttributes> implements TfQuestions {
  public questionId: number;
  public quizId: number;
  public questionType: string;
  public question: string;
  public correctAnswer: string;
}

export default function (sequelize: Sequelize): typeof TfQuestionsModel {
  TfQuestionsModel.init(
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
      tableName: 'TfQuestions',
      sequelize,
    },
  );

  return TfQuestionsModel;
}
