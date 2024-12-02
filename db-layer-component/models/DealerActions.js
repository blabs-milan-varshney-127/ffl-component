const { DataTypes, Model, Op } = require("sequelize");

class DealerActions extends Model {
  static async createModel(pool) {
    return DealerActions.init(
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
        status: {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ["pending", "approved", "rejected"]
        },
        name: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["email", "phone", "contact", "web_url", 'nics_fee', 'extra_firearm_fee', 'pistol_fee', 'rifle_fee', 'shotgun_fee', 'sbr_fee', 'suppressor_fee', 'discount_multiple_firearms', 'optin_optout_value', 'pistol_enabled', 'rifle_enabled', 'shotgun_enabled', 'sbr_enabled', 'suppressor_enabled', 'receiver_fee', 'receiver_enabled', 'is_primary_email', 'is_primary_phone', 'phone_label_fax', 'phone_label_home', 'phone_label_work', 'phone_label_other', 'phone_label_mobile']
        },
        type:{
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["add", "remove"]
        },
        value: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        created_by: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        reviewed_by:{
          type: DataTypes.TEXT,
          allowNull: true
        },
        reviewed_at: {
          type: DataTypes.DATE,
          allowNull: true,
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
        createdAt: "created_at",
        updatedAt: false,
        paranoid: false,
        tableName: "dealer_actions",
      }
    );
  }
}

module.exports = DealerActions;
