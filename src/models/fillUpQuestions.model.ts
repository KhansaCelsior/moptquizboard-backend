import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { FillUpQuestions } from '@interfaces/fillUpQuestions.interface';

export type FillUpQuestionsCreationAttributes = Optional<FillUpQuestions, 'questionid' | 'quizid' | 'questiontype' | 'question' | 'correctanswer'>;

export class FillUpQuestionsModel extends Model<FillUpQuestions, FillUpQuestionsCreationAttributes> implements FillUpQuestions {
  public questionid: number;
  public quizid: number;
  public questiontype: string;
  public question: string;
  public correctanswer: string;
}

export default function (sequelize: Sequelize): typeof FillUpQuestionsModel {
  FillUpQuestionsModel.init(
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
      tableName: 'fillupquestions',
      sequelize,
    },
  );

  return FillUpQuestionsModel;
}
