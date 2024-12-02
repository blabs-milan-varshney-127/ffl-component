const { DataTypes, Model, literal} = require("sequelize");

class FFLStoreFilters extends Model {
  static async createModel(pool) {
    return FFLStoreFilters.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        api_key: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filters: {
            type: DataTypes.JSONB,
            allowNull: false
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_store_filters"
      }
    );
  }
}

module.exports = FFLStoreFilters;
