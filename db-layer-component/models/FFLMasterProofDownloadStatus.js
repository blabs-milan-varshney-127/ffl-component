const { DataTypes, Model } = require("sequelize");

const masterProofStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  EZ_CHECK_VALIDATION: 'EZ_CHECK_VALIDATION',
  GENERATING_COVER_PAGE: 'GENERATING_COVER_PAGE',
  GENERATING_EZ_CHECK_PAGE: 'GENERATING_EZ_CHECK_PAGE',
  GENERATING_LICENSE_PAGE: 'GENERATING_LICENSE_PAGE',
  GENERATING_FINAL_DOCUMENT: 'GENERATING_FINAL_DOCUMENT',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
}

class FFLMasterProofDownloadStatus extends Model {
  static async createModel(pool) {
    return FFLMasterProofDownloadStatus.init(
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING(8),
          allowNull: false,
          references: {
              model: "ffl_master",
              key: "license_key",
          }
        },
        store_id: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          values: Object.values(masterProofStatus),
        },
        document_path: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        createdby: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize: pool,
        paranoid: false,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        tableName: "ffl_master_proof_download_status",
      }
    );
  }
}

module.exports = { FFLMasterProofDownloadStatus, masterProofStatus };
