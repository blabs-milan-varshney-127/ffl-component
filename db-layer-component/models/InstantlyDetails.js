const { DataTypes, Model } = require("sequelize");

class FFLInstantlyDetails extends Model {
  static async createModel(pool) {
    return FFLInstantlyDetails.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        full_license_key: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        license_type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        instantly_id: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        campaign_id: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_instantly_details",
      }
    );
  }
}

module.exports = FFLInstantlyDetails;
