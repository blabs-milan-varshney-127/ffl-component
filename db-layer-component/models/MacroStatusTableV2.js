const { Model, DataTypes } = require("sequelize");

const InboundMacroStatus = {
  inbound_transfer_pending: 'inbound_transfer_pending',
  inbound_transfer_awaiting_item: 'inbound_transfer_awaiting_item',
  inbound_transfer_item_received: 'inbound_transfer_item_received',
  inbound_transfer_complete: 'inbound_transfer_complete',
}

const Macrostatus = {
  transfer_initiated: "transfer_initiated",
  new_dealer_assigned: "new_dealer_assigned",
  waiting_for_email: "waiting_for_email",
  initiation_email_sent: "initiation_email_sent",
  waiting_dealer_action: "waiting_dealer_action",
  waiting_license_validation: "waiting_license_validation",
  outbound_transfer_confirmed: "outbound_transfer_confirmed",
  outbound_transfer_complete: "outbound_transfer_complete",
  ...InboundMacroStatus
};

const StepStatus = {
  pending: "pending",
  success: "success",
  failed: "failed",
  in_progress: "in_progress"
};

const TransferTypeEnum = {
  in_bound: 'in_bound', 
  out_bound: 'out_bound'
}

class MacroStatusHistory extends Model {
  static async createModel(pool) {
    return MacroStatusHistory.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: Object.keys(Macrostatus).map((key) => Macrostatus[key]),
        },
        transferId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "ffl_transfer_v2",
            key: "id",
          },
        },
        messageId: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        stepStatus: {
          type: StepStatus,
          values: Object.keys(StepStatus),
          allowNull: false,
        },
        startedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        finishedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        order: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        schedulerId: {
          type: DataTypes.TEXT,
          allowNull: true
        },
        transferType: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: Object.keys(TransferTypeEnum),
        },
        assign_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "ffl_transfer_dealer_history",
            key: "id",
          },
        }
      },
      {
        sequelize: pool,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        tableName: "macro_status_history_v2",
      }
    );
  }
}

module.exports = { MacroStatusHistory, Macrostatus, StepStatus, TransferTypeEnum, InboundMacroStatus };
