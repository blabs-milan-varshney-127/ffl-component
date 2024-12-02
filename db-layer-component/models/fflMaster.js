const { DataTypes, Model } = require("sequelize");

class FFLMaster extends Model {
  static async createModel(pool) {
    return FFLMaster.init(
      {
        license_key: {
          type: DataTypes.STRING(8),
          allowNull: false,
          primaryKey: true,
        },
        lic_regn: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        lic_dist: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        lic_cnty: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        lic_type: {
          type: DataTypes.STRING(2),
          allowNull: false,
        },
        lic_xprdte: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        lic_seqn: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        license_name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        business_name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        premise_state: {
          type: DataTypes.STRING(3),
          allowNull: false,
        },
        premise_city: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        premise_street: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        premise_zip_code: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        premise_zip_plus_four: {
          type: DataTypes.STRING(4),
          allowNull: true,
        },
        mail_street: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        mail_city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        mail_state: {
          type: DataTypes.STRING(3),
          allowNull: true,
        },
        mail_zip_code: {
          type: DataTypes.STRING(5),
          allowNull: false,
        },
        mail_zip_plus_four: {
          type: DataTypes.STRING(4),
          allowNull: true,
        },
        geo_lat: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        geo_lng: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        voice_phone: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        contact_email: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        create_ffl_raw_file_batch_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "ffl_raw_file_batch",
            key: "id",
          },
        },
        create_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        update_ffl_raw_file_batch_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "ffl_raw_file_batch",
            key: "id",
          },
        },
        update_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        is_deleted: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        order_score: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        is_big_box_retailer: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          allowNull: true,
        },
        delivery_indicator: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: ['residential', 'commercial']
        },
        ADDERR: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        RBDI: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        RESULT_CD: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        CRRT: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        DPBC: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        full_license_key: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        industry_relevance: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
        },
        is_sportsman_preferred: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        deafult_shipping_address: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        is_range: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        dealer_id: {
          type: DataTypes.TEXT,
          allowNull: true,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        dealer_id_algo_match: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        slug: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        magic_link_token: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        is_closed: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: ['temporary', 'permanent', 'operational']
        },
        updated_by: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        is_preferred_for_transfer: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        premise_address_changed_date: {
          type: DataTypes.DATE,
          allowNull: true
        },
        mailing_address_changed_date: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["slug"],
            name: "unique_slug",
          },
        ],
        sequelize: pool,
        timestamps: false,
        paranoid: false,
        tableName: "ffl_master",
      }
    );
  }
}

module.exports = { FFLMaster };
