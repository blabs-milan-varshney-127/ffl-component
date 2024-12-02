const { DataTypes, Model, UUIDV4 } = require("sequelize");

class FFLSeller extends Model {
  static async createModel(pool) {
    return FFLSeller.init(
      {
        store_id: {
          type: DataTypes.TEXT,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        seller_email: {
          type: DataTypes.TEXT,
          allowNull: true,
          unique: true,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        contact_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        contact_phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        website: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        access_credentials: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.ENUM,
          values: ["Active", "Inactive"],
          allowNull: true,
        },
        subscription_start_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        subscription_end_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        store_premise_state: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        store_premise_street: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        store_premise_zip_code: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        store_premise_city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        store_contact_fax: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        store_license_key: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        store_lic_type: {
          type: DataTypes.ENUM,
          values: ["01", "02", "07"],
          allowNull: true,
        },
        store_license_file_path: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        is_pending_workflow: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
        branding_asset_path: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        is_external: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: true
        },
        store_domain: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          defaultValue: UUIDV4
        },
        bcc_email:{
          type: DataTypes.STRING,
          allowNull: true,
        },
        dealer_id:{
          type: DataTypes.STRING,
          allowNull:false
        },
        branding_color:{
          type: DataTypes.STRING,
          allowNull:true
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_seller",
      }
    );
  }
}

module.exports = FFLSeller;
