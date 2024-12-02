const { DataTypes, Model } = require("sequelize");

class FFLUpdatedDealersValue extends Model {
  static async createModel(pool) {
    return FFLUpdatedDealersValue.init(
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
        store_id: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_seller",
            key: "store_id",
          },
        },
        property_name: {
          type: DataTypes.ENUM,
          values: ["email", "phone", "website", "contact"],
          allowNull: false,
        },
        property_value: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        approved_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        status: {
          type: DataTypes.ENUM,
          values: ["Accepted", "Pending", "Rejected"],
          allowNull: false,
        },
      },
      {
        sequelize: pool,
        timestamps: false,
        paranoid: false,
        tableName: "ffl_updated_dealers_value",
      }
    );
  }
}

module.exports = FFLUpdatedDealersValue;
