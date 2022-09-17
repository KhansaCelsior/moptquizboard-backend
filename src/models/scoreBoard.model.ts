import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { ScoreBoard } from '@interfaces/scoreBoard.interface';

export type ScoreBoardCreationAttributes = Optional<ScoreBoard, 'userId' | 'quizId'| 'score'>;

export class ScoreBoardModel extends Model<ScoreBoard, ScoreBoardCreationAttributes> implements ScoreBoard {
  public userId: number;
  public quizId: number;
  public score: number;
}

export default function (sequelize: Sequelize): typeof ScoreBoardModel {
  ScoreBoardModel.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quizId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      score: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'ScoreBoard',
      sequelize,
    },
  );

  return ScoreBoardModel;
}
