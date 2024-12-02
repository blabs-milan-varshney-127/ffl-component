const { DataTypes, Model, literal } = require("sequelize");

class FFLSerpMultiPlatform extends Model {
  static async createModel(pool) {
    return FFLSerpMultiPlatform.init(
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
        link: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: true,
          defaultValue: null,
        },
        types: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: true,
          defaultValue: null,
        },
        error_text: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        phone_number: {
          type: DataTypes.ARRAY(DataTypes.STRING),
          allowNull: true,
          defaultValue: null,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        rating: {
          type: DataTypes.FLOAT,
          allowNull: true,
          defaultValue: null,
        },
        reviews_count: {
          type: DataTypes.NUMBER,
          allowNull: true,
          defaultValue: null,
        },
        platform: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: ["yelp"],
          defaultValue: null,
        },
        engine: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["yelp", "bing", "yahoo"],
          defaultValue: "yelp",
        },
        bio: {
          type: DataTypes.STRING,
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
          defaultValue: literal("CURRENT_TIMESTAMP")
        },
        is_permanently_closed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: true
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["dealer_id", "engine", "platform"],
            name: "unique_record",
          },
        ],
        sequelize: pool,
        updatedAt: "updated_at",
        createdAt: "datetime",
        paranoid: false,
        tableName: "ffl_serp_multi_platform",
      }
    );
  }
}

module.exports = FFLSerpMultiPlatform;
