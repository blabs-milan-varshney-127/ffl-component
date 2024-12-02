const { DataTypes, Model, Op } = require("sequelize");

class FFLEZCheckValidatorHistory extends Model {
  static async createModel(pool) {
    return FFLEZCheckValidatorHistory.init(
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
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        ez_check_html_file_path: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ez_check_expiry_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        ez_check_loa_start_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        ez_check_loa_end_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
        paranoid: false,
        tableName: "ffl_ez_check_validator_history",
      }
    );
  }
}

module.exports = FFLEZCheckValidatorHistory;
