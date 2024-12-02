const { DataTypes, Model } = require("sequelize");

class FFLDealerEmailHitResponse extends Model {
  static async createModel(pool) {
    return FFLDealerEmailHitResponse.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        hit_id: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_dealer_email_hit",
            key: "hit_id",
          },
        },
        hit_type_id: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_dealer_email_hit",
            key: "hit_type_id",
          },
        },
        hit_group_id: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: "ffl_dealer_email_hit",
            key: "hit_group_id",
          },
        },
        assignment_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        worker_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        doc_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        customer_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        response_time: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        raw_response: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: ["Submitted", "Approved", "Rejected"],
        },
        approved_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize: pool,
        timestamps: true,
        paranoid: false,
        tableName: "ffl_dealer_email_hit_response",
      }
    );
  }
}

module.exports = FFLDealerEmailHitResponse;
