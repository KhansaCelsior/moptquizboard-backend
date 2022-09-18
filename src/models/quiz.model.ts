import { FillUpQuestionsModel } from './fillUpQuestions.model';
import { TfQuestionsModel } from './tfQuestions.model';
import { McqQuestionsModel } from './mcqQuestions.model';
import { McqQuestions } from './../interfaces/mcqQuestions.interface';
import { CategoryModel } from './category.model';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Quiz } from '@interfaces/quiz.interface';
import { UserModel } from './users.model';

export type QuizCreationAttributes = Optional<Quiz, 'quizid' | 'userid' | 'categoryid' | 'quizname' | 'questiontype'>;

export class QuizModel extends Model<Quiz, QuizCreationAttributes> implements Quiz {
  public quizid: number;
  public userid: number;
  public categoryid: number;
  public quizname: string;
  public questiontype: string;
  public quizlink: string;
  //declare userid: ForeignKey<UserModel['userid']>;
}

export default function (sequelize: Sequelize): typeof QuizModel {
  QuizModel.init(
    {
      quizid: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      categoryid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quizname: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      questiontype: {
        allowNull: true,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'quiz',
      sequelize,
    },
  );

  // QuizModel.belongsToMany(UserModel, {
  //   through: 'userquiz'
  // });

  // QuizModel.hasMany(McqQuestionsModel, {
  //   foreignKey: 'questionId',
  //   as: 'McqQuestions'
  // });
  // McqQuestionsModel.belongsTo(QuizModel);

  // QuizModel.hasMany(TfQuestionsModel, { foreignKey: 'questionId' });
  // TfQuestionsModel.belongsTo(QuizModel);

  // QuizModel.hasMany(FillUpQuestionsModel, { foreignKey: 'questionId' });
  // FillUpQuestionsModel.belongsTo(QuizModel);

  return QuizModel;
}
// QuizModel.hasMany(McqQuestionsModel, { sourceKey: foreignKey: 'questionId' });
