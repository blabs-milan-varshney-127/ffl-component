const { DataTypes, Model } = require("sequelize");

class FFLLoaDocumentsHistory extends Model {
  static async createModel(pool) {
    return FFLLoaDocumentsHistory.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        license_key: {
          type: DataTypes.STRING,
          references: {
            model: 'ffl_master',
            key: 'license_key',
          },
        },
        dealer_id: {
          type: DataTypes.STRING,
          references: {
            model: 'ffl_master_dealer_details',
            key: 'dealer_id',
          },
        },
        path: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: 'pending',
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
        reviewed_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        reviewed_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        loa_type: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: 'ffl',
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: true
        },
        transfer_id: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        source: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        rejected_reason: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        note: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: 'ffl_loa_documents_history',
      }
    );
  }
}

module.exports = { FFLLoaDocumentsHistory };
