const { Model, DataTypes } = require("sequelize");

const inboundMicroStatus = {
  item_recieved: "item_recieved",
  consumer_picked_up: "consumer_picked_up",
  waiting_for_terms_and_condition: "waiting_for_terms_and_condition",
  accept_terms_and_condition: "accept_terms_and_condition",
  reject_terms_and_condition: "reject_terms_and_condition"
}

const inboundTransferActions = {
  ...inboundMicroStatus
}

const Microstatus = {
  waiting_for_mturk: "waiting_for_mturk",
  waiting_for_admin: "waiting_for_admin",
  opted_out: "opted_out",
  uploaded_sot_tax_stamp: "uploaded_sot_tax_stamp",
  sot_tax_stamp_validated: "sot_tax_stamp_validated",
  sot_tax_stamp_validation_failed: "sot_tax_stamp_validation_failed",
  uploaded_loa_certificate: "uploaded_loa_certificate",
  loa_certificate_validated: "loa_certificate_validated",
  loa_certificate_validation_failed: "loa_certificate_validation_failed",
  email_not_found: "email_not_found",
  email_delivered: "email_delivered",
  email_bounced: "email_bounced",
  accepted_transfer: "accepted_transfer",
  ocr_checks: "ocr_checks",
  ez_check: "ez_check",
  license_validated: "license_validated",
  license_acquisition_failed: "license_acquisition_failed",
  license_validation_failed: "license_validation_failed",
  upload_license: "upload_license",
  dealer_unresponsive: "dealer_unresponsive",
  receiving_ffl_click: "receiving_ffl_click",
  dealer_selected: "dealer_selected",
  email_opened: "email_opened",
  email_clicked: "email_clicked",
  resent_email: "resent_email",
  manual_license_review: "manual_license_review",
  email_reminder_sent: "email_reminder_sent",
  ...inboundMicroStatus
};

const metaDataStatusEnum = {
  in_progress: 'in_progress',
  failed: 'failed',
  passed: 'passed',
}

const stepMapping = {
  '1': 'Unknown error',
  '10': 'OCR Failed',
  '11': 'OCR Failed',
  '12': 'License number or expiry date not recognized',
  '13': 'Duplicate certificate uploaded',
  '30': 'EZ Check failed',
  '31': 'EZ Check failed',
  '32': 'EZ Check failed',
  '33': 'EZ Check failed',
  '50': 'License validation failed',
  '51': 'License validation failed',
  '52': 'Dealer id not matched for transfer',
  '53': 'License number or expiry date not recognized',
  '54': 'License Expired',
  '55': 'Address review required',
  '71': 'Unknown error',
  '100': 'Rejected',
  "101": "Invalidated certificates after addresses changed through ATF"
};

const ocrChecksStatus = {
  in_progress : "Running OCR & Sanity checks",
  passed : "OCR & Sanity checks successful",
  failed : "OCR & Sanity checks failed",
}

const ezChecksStatus = {
  in_progress : "Running EZ Check",
  passed : "EZ Check successful",
  failed : "EZ Check failed",
}

class MicroStatusHistory extends Model {
  static async createModel(pool) {
    return MicroStatusHistory.init(
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
          values: Object.keys(Microstatus).map((key) => Microstatus[key]),
        },
        macroStatusId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "macro_status_history_v2",
            key: "id",
          },
        },
        transferId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "ffl_transfer_v2",
            key: "id",
          },
        },
        schedulerId: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        metaData: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
      },
      {
        sequelize: pool,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        tableName: "micro_status_history_v2",
      }
    );
  }
}

module.exports = { MicroStatusHistory, Microstatus, inboundMicroStatus, inboundTransferActions, metaDataStatusEnum, stepMapping, ocrChecksStatus, ezChecksStatus };
