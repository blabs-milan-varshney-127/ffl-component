const { DataTypes, Model, literal, STRING } = require("sequelize");

const SerpEngineTypes = {
  yelp: ['google','yahoo', 'bing'],
  google: ['yahoo', 'bing'],
  bing: ['yahoo'],
  yahoo: null
};

class FFLSerpEnrichment extends Model {
  static async createModel(pool) {
    return FFLSerpEnrichment.init(
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
        datetime: {
          type: DataTypes.DATE,
          defaultValue: literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        raw_response: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        social_profiles: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null,
        },
        type: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        error_text: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        website: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        phone_number: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        reviews_count: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null,
        },
        ratings: {
          type: DataTypes.FLOAT,
          allowNull: true,
          defaultValue: null,
        },
        facebook_ratings: {
          type: DataTypes.FLOAT,
          allowNull: true,
          defaultValue: null,
        },
        facebook_reviews_count: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null,
        },
        yelp_ratings: {
          type: DataTypes.FLOAT,
          allowNull: true,
          defaultValue: null,
        },
        yelp_reviews_count: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: null,
        },
        place_id: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        google_place_json: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null,
        },
        bio: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        photo_scraped_date: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null,
        },
        photos_s3_path: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: null,
        },
        logo_image: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        google_maps_raw_response_s3_path: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        google_maps_photos_raw_response_s3_path: {
          type: DataTypes.ARRAY(STRING),
          allowNull: true,
          defaultValue: null,
        },
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: false,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        last_enriched_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: literal("CURRENT_TIMESTAMP"),
        },
        logo_date: {
          type: DataTypes.DATE,
          allowNull: true
        },
        logo_source: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: Object.keys(SerpEngineTypes)
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["license_key"],
            name: "unique_license_key",
          },
        ],
        sequelize: pool,
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_serp_enrichment",
      }
    );
  }
}

module.exports = {
  FFLSerpEnrichment,
  SerpEngineTypes
};
