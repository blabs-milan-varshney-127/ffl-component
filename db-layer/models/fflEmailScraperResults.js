const { DataTypes, Model } = require("sequelize");

class FFLEmailScraperResults extends Model {
  static async createModel(pool) {
    return FFLEmailScraperResults.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        source: {
          type: DataTypes.ENUM,
          values: ["facebook", "website", "rock_river_arms", "m_turk", "master_scraper"],
          allowNull: false,
        },
        crawling_date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
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
        profile_id: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        error: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        emails: {
          type: DataTypes.ARRAY(DataTypes.TEXT),
          allowNull: true,
        },
        raw_scraper_output: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        phone_numbers: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "email_scraper_results",
      }
    );
  }
}

module.exports = FFLEmailScraperResults;
