import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';
import hashPassword from '#root/helpers/hashPassword';

export class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'users',
    sequelize,
    defaultScope: {
      rawAttributes: {
        exclude: ['password'],
      },
    },
    hooks: {
      beforeCreate: async (user, options) => {
        const hashedPassword = await hashPassword(user.password);
        user.password = hashedPassword;
      },
    },
  }
);

export class UserSessions extends Model {}
UserSessions.init(
  {
    userId: {
      allowNull: false,
      references: {
        key: 'id',
        model: 'users',
      },
      type: DataTypes.UUID,
    },
    expiresAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    modelName: 'users-sessions',
    sequelize,
    paranoid: false,
    updatedAt: false,
  }
);
