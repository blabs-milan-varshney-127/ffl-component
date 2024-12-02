const { DataTypes, Model, Op } = require("sequelize");

class FFLCertificateValidationHistory extends Model {
  static async createModel(pool) {
    return FFLCertificateValidationHistory.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        license_file_path: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ocr_expiry_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        ez_check_html_file_path: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ez_check_expiry_date: {
          type: DataTypes.DATEONLY,
          allowNull: true,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        approval_status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["pending", "approved", "rejected"],
          defaultValue: "pending"
        },
        created_date_time: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
        description: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        client_document_id: {
          type: DataTypes.UUIDV4,
          allowNull: true,
        },
        reviewed_by: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        reviewed_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        position_title: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        printed_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        printed_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        object_path: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        orientation: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        is_layout_present: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        is_form_data_present: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        is_table_present: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        signature_counts: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        ocr_layout_data_file_path: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ocr_form_data_file_path: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        source: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        unstamped_license_path: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        premise_address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        mailing_address: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        rejected_reason: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        note: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: true
        },
        updated_by: {
          type: DataTypes.TEXT,
          allowNull: true
        }
      },
      {
        sequelize: pool,
        timestamps: false,
        paranoid: false,
        tableName: "master_ffl_certification_validation_history",
      }
    );
  }
}

module.exports = FFLCertificateValidationHistory;
