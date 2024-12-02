const { Model, DataTypes } = require("sequelize");

class FFLTransferDealerHistory extends Model {
  static async createModel(pool) {
    return FFLTransferDealerHistory.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        transfer_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "ffl_transfer_v2",
            key: "id",
          },
        },
        license_key: {
          type: DataTypes.STRING(8),
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
        tableName: "ffl_transfer_dealer_history",
      }
    );
  }
}

module.exports = { FFLTransferDealerHistory };
