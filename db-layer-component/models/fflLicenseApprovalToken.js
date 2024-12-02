const { DataTypes, Model } = require("sequelize");

class FFLLicenseApprovalToken extends Model {
  static async createModel(pool) {
    return FFLLicenseApprovalToken.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "master_ffl_certification_validation_history",
            key: "id",
          },
        },
        license_key: {
          type: DataTypes.STRING(8),
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        expiry_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        token: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_license_approval_token",
      }
    );
  }
}

module.exports = FFLLicenseApprovalToken;
