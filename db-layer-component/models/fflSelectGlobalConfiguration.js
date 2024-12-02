const { DataTypes, Model } = require("sequelize");

class FFLSelectGlobalConfiguration extends Model {
  static async createModel(pool) {
    return FFLSelectGlobalConfiguration.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          defaultValue: 0
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: false
        },
        updated_by:{
          type: DataTypes.STRING,
          allowNull: false
        },
        config: {
          type: DataTypes.JSONB,
          allowNull: true
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_select_global_configuration",
      }
    );
  }
}

module.exports = { FFLSelectGlobalConfiguration };
