const { DataTypes, Model } = require("sequelize");
const { Macrostatus, StepStatus } = require("ffl-models/MacroStatusTableV2");
const { Microstatus } = require("ffl-models/MicroStatusTableV2");

const TransferSourceEnum = {
  FFL_360: "FFL_360",
  FFL_SELECT: "FFL_SELECT"
}
const TransferSourceEnumText = {
  FFL_360 : 'FFL 360',
  FFL_SELECT : 'E-commerce'
}

const MacrostatusEnum = {
  ...Macrostatus,
  tranfer_pending: "tranfer_pending"
}

class FFLTransfer extends Model {
  static async createModel(pool) {
    return FFLTransfer.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        reference_id: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        firearms: {
          type: DataTypes.ARRAY(DataTypes.TEXT),
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          values: Object.values(MacrostatusEnum),
          allowNull: true,
        },
        store_id: {
          type: DataTypes.TEXT,
          allowNull: false,
          references: {
            model: "ffl_seller",
            key: "store_id",
          },
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        buyer_name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        store_url: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        order_date: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        buyer_phone: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        buyer_email: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        model_type: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        buyer_street: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        buyer_city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        buyer_state: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        buyer_zip_code: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        agent: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        created_by: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        modified_by: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        notes: {
          type: DataTypes.ARRAY(DataTypes.TEXT),
          allowNull: true,
        },
        licenseProof: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        ezCheckProof: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        transfer_code: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        status_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "macro_status_history_v2",
            key: "id",
          },
        },
        transfer_proof_path: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        stepStatus: {
          type: StepStatus,
          values: Object.keys(StepStatus),
          allowNull: true,
        },
        usedEmail: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        source: {
          type: DataTypes.ENUM,
          values: Object.values(TransferSourceEnum),
          allowNull: false,
          defaultValue: TransferSourceEnum.FFL_360
        },
        shipping_address: {
          type: DataTypes.JSONB,
          allowNull: true
        },
        micro_status: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: Object.values(Microstatus),
          defaultValue: null
        },
        is_archive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        archive_date: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: null
        },
        inbound_macro_status: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: Object.values(MacrostatusEnum)
        },
        inbound_step_status: {
          type: StepStatus,
          values: Object.keys(StepStatus),
          allowNull: true,
        },
        inbound_macro_status_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "macro_status_history_v2",
            key: "id",
          },
        },
        inbound_transfer_completion_timestamp: {
          type: DataTypes.DATE,
          allowNull: true
        },
        outbound_transfer_completion_timestamp: {
          type: DataTypes.DATE,
          allowNull: true
        },
        assign_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "ffl_transfer_dealer_history",
            key: "id",
          },
        },
        reciever_dealer_id: {
          type: DataTypes.TEXT,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "dealer_id",
          },
        },
        store_dealer_id:{
          type: DataTypes.TEXT,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "dealer_id",
          },
        },
        is_loa_needed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        sku: {
          type: DataTypes.STRING,
          allowNull: true
        },
        source_description: {
          type: DataTypes.TEXT,
          allowNull: false
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["reference_id", "store_id"],
            name: "ffl_transfer_reference_id_key",
          },
        ],
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_transfer_v2",
      }
    );
  }
}

module.exports = { FFLTransfer, TransferSourceEnum, MacrostatusEnum, TransferSourceEnumText };
