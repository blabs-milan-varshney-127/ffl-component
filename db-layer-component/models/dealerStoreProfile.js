const { DataTypes, Model, Op, STRING } = require("sequelize");

class DealerStoreProfile extends Model {
  static async createModel(pool) {
    return DealerStoreProfile.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        store_id: {
          type: DataTypes.STRING,
          references: {
            model: "ffl_seller",
            key: "store_id",
          },
        },
        contact_names: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: false,
        },
        websites: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: false,
        },
        old_emails: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        emails: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: false,
        },
        old_phones: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        phones: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: false,
        },
        facebook_urls: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: false,
        },
        yelp_urls: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: false,
        },
        opt_out_status: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: false,
        },
        transfer_types: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: false,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["license_key", "store_id"],
            name: "store_profile_unique_records",
          },
        ],
        sequelize: pool,
        timestamps: true,
        createdAt: "createdat",
        updatedAt: "updatedat",
        paranoid: false,
        tableName: "dealer_store_profile",
      }
    );
  }
}

module.exports = DealerStoreProfile;
