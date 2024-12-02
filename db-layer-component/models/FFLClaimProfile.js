const { DataTypes, Model } = require("sequelize");

const ClaimProfileStatusEnum = {
  initiated: "initiated",
  verified: "verified",
  email_Sent: "email_Sent",
  claimed: "claimed",
  verification_failed: "verification_failed",
}
const SubscriptionEnum = {
  premium: "premium", 
  free: "free"
};

class FFLClaimProfile extends Model {
  static async createModel(pool) {
    return FFLClaimProfile.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_phone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          allowNull: false,
          values: Object.values(ClaimProfileStatusEnum),
        },
        raw_response: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null,
        },
        license_key: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_master",
            key: "license_key",
          },
        },
        subscription: {
          type: DataTypes.ENUM,
          allowNull: true,
          values: Object.values(SubscriptionEnum),
        },
        dealer_id: {
          type: DataTypes.STRING,
          allowNull: true,
          references: {
            model: "ffl_master_dealer_details",
            key: "dealer_id",
          },
        },
        email: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["phone", "license_key", "dealer_id"],
          }
        ],
        sequelize: pool,
        createdAt: "created_at",
        updatedAt: "updated_at",
        paranoid: false,
        tableName: "ffl_claim_profile",
      }
    );
  }
}

module.exports = { FFLClaimProfile, ClaimProfileStatusEnum, SubscriptionEnum };
