const { DataTypes, Model } = require("sequelize");

class FFLRockRiverArms extends Model {
  static async createModel(pool) {
    return FFLRockRiverArms.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        business_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        street: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        state: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        zip: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        website: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize: pool,
        timestamps: false,
        paranoid: false,
        tableName: "rock_river_arms_data",
      }
    );
  }
}

module.exports = FFLRockRiverArms;
