const { DataTypes, Model } = require("sequelize");

class FFLMasterDealerDetails extends Model {
  static async createModel(pool) {
    return FFLMasterDealerDetails.init(
      {
        dealer_id: {
          type: DataTypes.TEXT,
          primaryKey: true,
        },
        slug: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        myffl_path: {
          type: DataTypes.TEXT,
          allowNull: true
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: false,
        paranoid: false,
        tableName: "ffl_master_dealer_details",
      }
    );
  }
}

module.exports = FFLMasterDealerDetails;
