const { DataTypes, Model } = require("sequelize");

class FFLDealerEmailHit extends Model {
  static async createModel(pool) {
    return FFLDealerEmailHit.init(
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
        hit_id: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        hit_type_id: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        hit_group_id: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        hit_creation_time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["Pending", "Approved", "Expired"],
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_dealer_email_hit",
      }
    );
  }
}

module.exports = FFLDealerEmailHit;
