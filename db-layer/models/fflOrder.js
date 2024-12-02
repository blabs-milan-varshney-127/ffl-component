const { DataTypes, Model } = require("sequelize");

class FFLOrderDetails extends Model {
  static async createModel(pool) {
    return FFLOrderDetails.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV1,
          primaryKey: true,
          allowNull: false,
        },
        order_id: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        product_names: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: false,
        },
        transfer_status: {
          type: DataTypes.ENUM,
          values: ["accepted", "pending", "rejected"],
          allowNull: true,
        },
        store_id: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_seller",
            key: "store_id",
          },
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_order",
      }
    );
  }
}

module.exports = FFLOrderDetails;
