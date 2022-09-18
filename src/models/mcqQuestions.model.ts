import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { McqQuestions } from '@interfaces/mcqQuestions.interface';

export type McqQuestionsCreationAttributes = Optional<McqQuestions, 'questionid' | 'quizid' | 'questiontype' | 'question' | 'correctanswer' | 'option1'| 'option2'| 'option3'| 'option4'>;

export class McqQuestionsModel extends Model<McqQuestions, McqQuestionsCreationAttributes> implements McqQuestions {
  public questionid: number;
  public quizid: number;
  public questiontype: string;
  public question: string;
  public correctanswer: string;
  public option1: string;
  public option2: string;
  public option3: string;
  public option4: string;
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
      option1: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      option2: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      option3: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      option4: {
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
