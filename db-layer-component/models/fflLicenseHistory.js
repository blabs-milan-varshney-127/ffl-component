const { DataTypes, Model } = require("sequelize");

class LicenseHistory extends Model {
  static async createModel(pool) {
    return LicenseHistory.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING(8),
          allowNull: false,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        full_license_key: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        lic_regn: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        lic_dist: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        lic_cnty: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        lic_type: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        lic_xprdte: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        lic_seqn: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        license_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        business_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        premise_state: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        premise_street: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        premise_city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        premise_zip_code: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        premise_zip_plus_four: {
          type: DataTypes.STRING(4),
          allowNull: true,
        },
        mail_street: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mail_city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        mail_state: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        mail_zip_code: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        mail_zip_plus_four: {
          type: DataTypes.STRING(4),
          allowNull: true,
        },
        voice_phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        create_ffl_raw_file_batch_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        update_ffl_raw_file_batch_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        ffl_master_create_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        ffl_master_update_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "create_date",
        updatedAt: "update_date",
        paranoid: false,
        tableName: "ffl_license_history",
      }
    );
  }
}

module.exports = LicenseHistory;
