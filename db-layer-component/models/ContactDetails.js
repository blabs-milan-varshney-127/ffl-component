const { DataTypes, Model } = require("sequelize");

class ContactDetails extends Model {
  static async createModel(pool) {
    return ContactDetails.init(
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
        contact_details: {
          type: DataTypes.JSONB,
          allowNull: false,
          defaultValue: {},
        },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: true
        },
        updated_by: {
          type: DataTypes.STRING,
          allowNull: true
        },
        source: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["ffl360", "license", "master_scraper"]
        }
      },
      {
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "ffl_contact_details",
      }
    );
  }
}

module.exports = ContactDetails;
