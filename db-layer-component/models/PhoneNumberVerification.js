const { DataTypes, Model, Op } = require("sequelize");

class FFLPhoneNumberVerification extends Model {
  static async createModel(pool) {
    return FFLPhoneNumberVerification.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        raw_response: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null
        },
        is_valid: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
        phone_type: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      },
      {
        sequelize: pool,
        updatedAt: false,
        createdAt: "created_at",
        paranoid: false,
        tableName: "phone_verification",
      }
    );
  }
}

module.exports = FFLPhoneNumberVerification;
