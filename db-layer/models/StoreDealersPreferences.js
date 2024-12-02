const { DataTypes, Model, Op } = require("sequelize");

class StoreDealersPreferences extends Model {
  static async createModel(pool) {
    return StoreDealersPreferences.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        dealer_id: {
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
        score: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null,
        },
        isBlacklisted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        isPreferred: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        is_stocking_dealer: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        is_opt_in: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        updated_by: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["dealer_id", "store_id"],
            name: "unique_dealer_store",
          },
        ],
        sequelize: pool,
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        paranoid: false,
        tableName: "store_dealers_preference",
      }
    );
  }
}

module.exports = StoreDealersPreferences;
