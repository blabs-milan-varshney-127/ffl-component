const { DataTypes, Model } = require("sequelize");

class fflTermConditionsStatus extends Model {
  static async createModel(pool) {
    return fflTermConditionsStatus.init(
      {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        transfer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            references: {
              model: "ffl_transfer_v2",
              key: "id",
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: null,
        }
      },
      {
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: false,
        paranoid: false,
        tableName: "term_conditions_status",
      }
    );
  }
}

module.exports = fflTermConditionsStatus;
