import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';
import { QuizModel } from './quiz.model';

export type UserCreationAttributes = Optional<User, 'userid' | 'email' | 'password' | 'firstname' | 'lastname' | 'isadmin'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public userid: number;
  public email: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public isadmin: number;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      userid: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      isadmin: {
        allowNull: false,
        type: DataTypes.INTEGER(),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );



  // UserModel.belongsToMany(QuizModel, {
  //   through: 'userquiz'
  // });

  return UserModel;
}
 