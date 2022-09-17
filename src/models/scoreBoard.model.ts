import { UserModel } from '@models/users.model';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { ScoreBoard } from '@interfaces/scoreBoard.interface';

export type ScoreBoardCreationAttributes = Optional<ScoreBoard, 'userid' | 'quizid'| 'score'>;

export class ScoreBoardModel extends Model<ScoreBoard, ScoreBoardCreationAttributes> implements ScoreBoard {
  public userid: number;
  public quizid: number;
  public score: number;
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
