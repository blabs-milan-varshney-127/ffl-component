const {DataTypes, Model } = require("sequelize");

class FFLTransferConfirmationEmail extends Model {
  static async createModel(pool) {
    return FFLTransferConfirmationEmail.init(
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
        action_performed: {
          type: DataTypes.ENUM,
          values: ['order', 'store', 'all', 'opt_in_all', 'opt_in_store', 'opt_in_order'],
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        store_id: {
          type: DataTypes.TEXT,
          allowNull: true,
          references: {
            model: "ffl_seller",
            key: "store_id",
          },
        },
      },
      {
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: false,
        tableName: "ffl_transfer_confirmation_email",
      }
    );
  }
}

module.exports = { FFLTransferConfirmationEmail };
