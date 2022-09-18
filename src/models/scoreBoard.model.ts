import { UserModel } from '@models/users.model';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { ScoreBoard } from '@interfaces/scoreBoard.interface';

export type ScoreBoardCreationAttributes = Optional<ScoreBoard, 'userid' | 'quizid'| 'score' |'quizlink'|'quizcode'>;

export class ScoreBoardModel extends Model<ScoreBoard, ScoreBoardCreationAttributes> implements ScoreBoard {
  public userid: number;
  public quizid: number;
  public score: number;
  public quizlink: string;
  public quizcode: string;
}

export default function (sequelize: Sequelize): typeof ScoreBoardModel {
  ScoreBoardModel.init(
    {
      userid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quizid: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quizlink: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      quizcode: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    },
    {
      tableName: 'scoreboard',
      sequelize,
    },
  );
  return ScoreBoardModel;

  ScoreBoardModel.belongsToMany(UserModel, {
    through: 'userScore'
  });
}
