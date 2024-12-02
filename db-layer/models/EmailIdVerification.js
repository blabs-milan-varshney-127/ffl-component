const { DataTypes, Model, Op } = require("sequelize");

class FFLEmailIDVerification extends Model {
  static async createModel(pool) {
    return FFLEmailIDVerification.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: null
        },
        source: {
          type: DataTypes.ENUM,
          values: ['ListClean', 'SES'],
          allowNull: false,
          defaultValue: null
        },
        raw_response: {
          type: DataTypes.JSONB,
          allowNull: true,
          defaultValue: null
        },
        validated_by: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        validated_at: {
          type: DataTypes.DATE,
          allowNull: true,
        }
      },
      {
        sequelize: pool,
        updatedAt: false,
        createdAt: "created_at",
        paranoid: false,
        tableName: "email_verification",
      }
    );
  }
}

module.exports = FFLEmailIDVerification;
