const { DataTypes, Model } = require("sequelize");

class FFLEmailSyncInformation extends Model {
  static async createModel(pool) {
    return FFLEmailSyncInformation.init(
      {
        resync_id: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        last_sync_id: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_email_sync_info",
      }
    );
  }
}

module.exports = FFLEmailSyncInformation;
