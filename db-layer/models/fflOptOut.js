const { DataTypes, Model } = require("sequelize");

class FFLOptOut extends Model {
  static async createModel(pool) {
    return FFLOptOut.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
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
        opt_out_value: {
          type: DataTypes.ENUM,
          values: ['order', 'store', 'all', 'opt_in_all', 'opt_in_store', 'opt_in_order'],
          allowNull: false,
        },
        order_id: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_order",
            key: "order_id",
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
        createdby: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: false,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_opt_out",
      }
    );
  }
}

module.exports = FFLOptOut;
