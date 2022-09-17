import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import CategoryModel from '@models/users.model';
import FillUpQuestionsModel from '@models/fillUpQuestions.model';
import McqQuestionsModel from '@models/mcqQuestions.model';
import QuizModel from '@models/quiz.model';
import ScoreBoardModel from '@models/scoreBoard.model';
import TfQuestionsModel from '@models/tfQuestions.model';

import { logger } from '@utils/logger';
CategoryModel
const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  category: CategoryModel(sequelize),
  fillupquestions: FillUpQuestionsModel(sequelize),
  mcqquestions: McqQuestionsModel(sequelize),
  QuizModel: QuizModel(sequelize),
  scoreboard: ScoreBoardModel(sequelize),
  tfquestions: TfQuestionsModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;
