const { DataTypes, Model } = require("sequelize");

class FFLSOTUploadHistory extends Model {
  static async createModel(pool) {
    return FFLSOTUploadHistory.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        business_name: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        tax_stamp_upload_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["pending", "approved", "rejected"],
          defaultValue: "pending",
        },
        license_path: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        reviewed_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        reviewed_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: true,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        transfer_id: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        date_of_tax_stamp_receipt: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        annual_tax_rate: {
          type: DataTypes.DOUBLE,
          allowNull: true,
          defaultValue: null,
        },
        name_and_principal_business_address: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        actual_name_and_physical_business_address: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        number_of_locations: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null,
        },
        control_number: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        employee_identification_number: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        type_of_operation: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        special_tax_period_start_date: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        special_tax_period_end_date: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        source: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        error_code: {
          type: DataTypes.INTEGER,
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
      },
      {
        sequelize: pool,
        paranoid: false,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "ffl_sot_upload_history",
      }
    );
  }
}

module.exports = FFLSOTUploadHistory;
