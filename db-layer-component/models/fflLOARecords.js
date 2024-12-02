const { DataTypes, Model } = require("sequelize");

class FFLLOARecords extends Model {
  static async createModel(pool) {
    return FFLLOARecords.init(
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
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: 'ffl_master_dealer_details',
            key: 'dealer_id',
          },
        },
        last_ez_check_run: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        ez_check_loa_start_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        ez_check_loa_end_date: {
          type: DataTypes.DATE,
          allowNull: true,
        }
      },
      {
        sequelize: pool,
        timestamps: false,
        paranoid: false,
        tableName: "ffl_loa_records"
      }
    );
  }
}

module.exports = FFLLOARecords;
