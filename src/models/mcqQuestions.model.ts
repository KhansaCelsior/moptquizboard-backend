import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { McqQuestions } from '@interfaces/mcqQuestions.interface';

export type McqQuestionsCreationAttributes = Optional<McqQuestions, 'questionid' | 'quizid' | 'questiontype' | 'question' | 'correctanswer' | 'options'>;

export class McqQuestionsModel extends Model<McqQuestions, McqQuestionsCreationAttributes> implements McqQuestions {
  public questionid: number;
  public quizid: number;
  public questiontype: string;
  public question: string;
  public correctanswer: string;
  public options: string;
}

export default function (sequelize: Sequelize): typeof McqQuestionsModel {
  McqQuestionsModel.init(
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
      options: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'mcqquestions',
      sequelize,
    },
  );

  return McqQuestionsModel;
}
