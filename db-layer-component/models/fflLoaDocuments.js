const { DataTypes, Model } = require("sequelize");

class FFLLoaDocuments extends Model {
  static async createModel(pool) {
    return FFLLoaDocuments.init(
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
          unique: true,
          references: {
            model: 'ffl_master',
            key: 'license_key',
          },
        },
        dealer_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        issue_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        expiry_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        path: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        loa_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        history_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        source: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        updated_by: {
          type: DataTypes.TEXT,
          allowNull: true,
        }
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: 'ffl_loa_documents',
        indexes: [
          {
            unique: true,
            fields: ['license_key', 'dealer_id'],
          },
        ],
      }
    );
  }
}

module.exports = { FFLLoaDocuments };
