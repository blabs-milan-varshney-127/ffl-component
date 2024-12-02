const { DataTypes, Model } = require("sequelize");

class FFLSOTLicenses extends Model {
  static async createModel(pool) {
    return FFLSOTLicenses.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        dealer_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, 
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        silencer_shop_id: {
          type: DataTypes.STRING,
          allowNull: true,
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
        actual_physical_business_address: {
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
        expiry_date: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        license_path: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        bio_metric_scanner: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
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
        principal_business_name: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        actual_physical_business_name: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        source: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        }
      },
      {
        sequelize: pool,
        paranoid: false,
        createdAt: false,
        updatedAt: false,
        tableName: "ffl_sot_licenses",
      }
    );
  }
}

module.exports = FFLSOTLicenses;
