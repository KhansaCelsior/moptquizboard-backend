import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { McqQuestions } from '@interfaces/mcqQuestions.interface';

export type McqQuestionsCreationAttributes = Optional<McqQuestions, 'questionId' | 'quizId' | 'questionType' | 'question' | 'correctAnswer' | 'options'>;

export class McqQuestionsModel extends Model<McqQuestions, McqQuestionsCreationAttributes> implements McqQuestions {
  public questionId: number;
  public quizId: number;
  public questionType: string;
  public question: string;
  public correctAnswer: string;
  public options: string;
}

export default function (sequelize: Sequelize): typeof McqQuestionsModel {
  McqQuestionsModel.init(
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
      options: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'McqQuestions',
      sequelize,
    },
  );

  return McqQuestionsModel;
}
