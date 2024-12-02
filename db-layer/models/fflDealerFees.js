const { DataTypes, Model } = require("sequelize");

class FFLDealerFees extends Model {
  static async createModel(pool) {
    return FFLDealerFees.init(
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
        nics_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        extra_firearm_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        pistol_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        rifle_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        shotgun_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        sbr_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        suppressor_fee: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        discount_multiple_firearms: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        pistol_enabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        rifle_enabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        shotgun_enabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
        ,sbr_enabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        suppressor_enabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["license_key"],
            name: "ffl_dealer_fees_license_key",
          },
        ],
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_dealer_fees",
      }
    );
  }
}

module.exports = FFLDealerFees;
