const { DataTypes, Model, Op } = require("sequelize");

class CertificateWorkflowStatus extends Model {
  static async createModel(pool) {
    return CertificateWorkflowStatus.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        client_document_id: {
          type: DataTypes.STRING,
          allowNull: false
        },
        transfer_id: {
          type: DataTypes.STRING,
          allowNull: true
        },
        license_image_optimizer: {
          type: DataTypes.BOOLEAN,
          defaultValue: null,
          allowNull: true
        },
        ocr_check: {
          type: DataTypes.INTEGER,
          defaultValue: null,
          allowNull: true
        },
        license_validator:{
          type: DataTypes.INTEGER,
          defaultValue: null,
          allowNull: true
        },
        ez_validator: {
          type: DataTypes.BOOLEAN,
          defaultValue: null,
          allowNull: true
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "certificate_workflow_status",
      }
    );
  }
}

module.exports = CertificateWorkflowStatus;
