const { DataTypes, Model } = require("sequelize");

class fflTokenDetails extends Model {
  static async createModel(pool) {
    return fflTokenDetails.init(
      {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        expiry_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        license_key: {
            type: DataTypes.STRING(8),
            allowNull: false,
            references: {
              model: "ffl_master",
              key: "license_key",
            },
        },
        store_id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
            references: {
              model: "ffl_seller",
              key: "store_id",
            }
            },
        transfer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            references: {
              model: "ffl_transfer_v2",
              key: "id",
            }
        }
      },
      {
        sequelize: pool,
        updatedAt: false,
        paranoid: false,
        tableName: "ffl_token_details",
      }
    );
  }
}

module.exports = fflTokenDetails;
