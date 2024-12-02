const { DataTypes, Model } = require("sequelize");

class FFLMessageEvents extends Model {
  static async createModel(pool) {
    return FFLMessageEvents.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        message_id: {
          type: DataTypes.TEXT,
          allowNull: false,
          unique: true,
        },
        event: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        data: {
          type: DataTypes.JSONB,
          allowNull: false,
        },
        event_date_time: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "message_events",
      }
    );
  }
}

module.exports = FFLMessageEvents;
