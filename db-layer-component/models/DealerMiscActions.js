const { DataTypes, Model } = require("sequelize");

class DealerMiscActions extends Model {
  static async createModel(pool) {
    return DealerMiscActions.init(
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
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: false,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        google: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        facebook: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        instagram: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        twitter: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        yelp: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        linkedin: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        updated_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["dealer_id"],
            name: "dealer_misc_actions_dealer_id",
          },
        ],
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "dealer_misc_actions",
      }
    );
  }
}

module.exports = { DealerMiscActions };
