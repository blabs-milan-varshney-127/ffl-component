const { DataTypes, Model, literal} = require("sequelize");

class FFLMelissaEnrichment extends Model {
  static async createModel(pool) {
    return FFLMelissaEnrichment.init(
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
            }
        },
        raw_response:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        error_text: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null
        },
        delivery_indicator: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dealer_id: {
            type: DataTypes.TEXT,
            allowNull: false,
            references: {
              model: "ffl_master_dealer_details",
              key: "dealer_id",
            },
        },
      },
      {
        sequelize: pool,
        updatedAt: false,
        createdAt: "created_at",
        paranoid: false,
        tableName: "ffl_melissa_enrichment",
      }
    );
  }
}

module.exports = FFLMelissaEnrichment;
