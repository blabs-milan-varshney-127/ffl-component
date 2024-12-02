const { DataTypes, Model } = require("sequelize");

class DealerCustomAddress extends Model {
  static async createModel(pool) {
    return DealerCustomAddress.init(
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
        created_by: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        modified_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        street: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        state: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        zipcode: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        is_primary: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        dealer_id :{
          type: DataTypes.TEXT,
          allowNull: false,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "modified_at",
        paranoid: false,
        tableName: "dealer_custom_address",
      }
    );
  }
}

module.exports = { DealerCustomAddress };
