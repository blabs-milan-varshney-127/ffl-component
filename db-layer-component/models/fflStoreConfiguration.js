const { DataTypes, Model } = require("sequelize");

class FFLStoreConfiguration extends Model {
  static async createModel(pool) {
    return FFLStoreConfiguration.init(
      {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        store_id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: null,
            references: {
              model: "ffl_seller",
              key: "store_id",
            },
            unique: true
        },
        api_key: {
            type: DataTypes.STRING,
            allowNull: true
        },
        encryption_key: {
          type: DataTypes.STRING,
          allowNull: true
        },
        api_id: {
          type: DataTypes.STRING,
          allowNull: true
        },
        created_by: {
          type: DataTypes.STRING,
          allowNull: true
        },
        updated_by:{
          type: DataTypes.STRING,
          allowNull: true
        },
        google_map_key: {
          type: DataTypes.STRING,
          allowNull: true
        },
        store_configuration_webhook: {
          type: DataTypes.STRING,
          allowNull: true
        },
        master_proof_reciever_webhook: {
          type: DataTypes.STRING,
          allowNull: true
        },
        waiting_period_of_dealer_action: { // store minutes
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        filter_config: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: {},
        },
        agent_email: {
          type: DataTypes.STRING,
          allowNull: true
        },
        terms_and_conditions:{
          type: DataTypes.BLOB,
          allowNull: true
        },
        e_commerce_platform:{
          type: DataTypes.ENUM,
          defaultValue:"Magento",
          allowNull: false,
          values: ["Magento", "BigCommerce", "WooCommerce"]
        },
        is_mfa_enabled: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_store_configuration",
      }
    );
  }
}

module.exports = { FFLStoreConfiguration };
