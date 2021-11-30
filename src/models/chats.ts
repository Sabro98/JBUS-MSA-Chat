import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

interface ChatsAttributes {
  // id: number;
  speaker: string;
  contents: string;
  location: string;
}

export class Chats extends Model<ChatsAttributes> {
  public readonly id!: number;
  public speaker!: string;
  public contents!: string;
  public location!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Chats.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    speaker: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    modelName: 'Chats',
    tableName: 'Chats',
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updateTimestamp',
  }
);
