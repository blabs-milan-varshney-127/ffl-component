const { DataTypes, Model, Op } = require("sequelize");

class DealerEmailActions extends Model {
  static async createModel(pool) {
    return DealerEmailActions.init(
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

        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: false,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        is_primary: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        source: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        created_by: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        updated_by: {
          type: DataTypes.TEXT,
          allowNull: true,
          defaultValue: null,
        },
        label: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: null,
        },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
      },
      {
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "dealer_email_actions",
      }
    );
  }
}

module.exports = DealerEmailActions;
