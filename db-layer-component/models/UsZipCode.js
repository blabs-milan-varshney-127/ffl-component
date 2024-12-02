const { DataTypes, Model } = require("sequelize");

class UsZipCodes extends Model {
  static async createModel(pool) {
    return UsZipCodes.init(
      {
        zip: {
            type: DataTypes.STRING(5),
            primaryKey: true,
            allowNull: false,
        },
        lat: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: null,
        },
        lng: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: null,
        },
        timezone: {
            type: DataTypes.STRING(120),
            allowNull: true,
            defaultValue: null,
        }
      },
      {
        sequelize: pool,
        createdAt: false,
        updatedAt: false,
        paranoid: false,
        tableName: "uszips",
      }
    );
  }
}

module.exports = UsZipCodes;
