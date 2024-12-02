const { DataTypes, Model } = require("sequelize");

class FFLDealerServices extends Model {
  static async createModel(pool) {
    return FFLDealerServices.init(
      {
        license_key: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: true,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        services: {
          type: DataTypes.ARRAY(DataTypes.TEXT),
          allowNull: false,
        },
        created_by: {
          type: DataTypes.TEXT,
        },
        updated_by: {
          type: DataTypes.TEXT,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["dealer_id"],
            name: "dealer_services_dealer_id_unique",
          },
        ],
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "dealer_services",
      }
    );
  }
}

module.exports = FFLDealerServices;
