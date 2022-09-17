import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { TfQuestions } from '@interfaces/tfQuestions.interface';

export type TfQuestionsCreationAttributes = Optional<TfQuestions, 'questionid' | 'quizid' | 'questiontype' | 'question' | 'correctanswer'>;

export class TfQuestionsModel extends Model<TfQuestions, TfQuestionsCreationAttributes> implements TfQuestions {
  public questionid: number;
  public quizid: number;
  public questiontype: string;
  public question: string;
  public correctanswer: string;
}

export default function (sequelize: Sequelize): typeof TfQuestionsModel {
  TfQuestionsModel.init(
    {
      questionid: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quizid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      questiontype: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      question: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      correctanswer: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'tfquestions',
      sequelize,
    },
  );

  return TfQuestionsModel;
}
