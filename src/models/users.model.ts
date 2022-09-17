import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'userId' | 'email' | 'password'|'firstName' | 'lastName' | 'isAdmin'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public userId: number;
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public isAdmin: number;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
    {
      userId: {
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
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      isAdmin: {
        allowNull: false,
        type: DataTypes.INTEGER(),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
