const { DataTypes, Model, Op, STRING } = require("sequelize");

class DealerGlobalProfile extends Model {
  static async createModel(pool) {
    return DealerGlobalProfile.init(
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
        contact_names: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: [],
        },
        websites: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        facebook_urls: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        yelp_urls: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
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
        old_emails: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        emails: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        license_certificate_expiry: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: false,
        },
        license_certificate_id: {
          type: DataTypes.NUMBER,
          allowNull: true,
          references: {
            model: "master_ffl_certification_validation_history",
            key: "id",
          },
        },
        old_phones: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        phones: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null,
        },
        phones: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null,
        },
        position_title: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        printed_name: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        printed_date: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        facebook_rating: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        facebook_reviews_count: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        yelp_rating: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        yelp_reviews_count: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        google_reviews_count: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        google_rating: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        google_urls: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: [],
        },
        open_on_weekends: {
          type: DataTypes.BOOLEAN,
          defaultValue: null,
          allowNull: true
        },
        consolidate_ratings: {
          type: DataTypes.FLOAT,
          allowNull: true,
          defaultValue: null,
        },
        consolidate_reviews: {
          type: DataTypes.NUMBER,
          allowNull: true,
          defaultValue: null,
        },
        bio: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        is_permanently_closed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: true
        },
        services: {
          type: DataTypes.ARRAY(DataTypes.TEXT),
          allowNull: true,
          defaultValue: null,
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "createdat",
        updatedAt: "updatedat",
        paranoid: false,
        tableName: "dealer_global_profile",
      }
    );
  }
}

module.exports = DealerGlobalProfile;
