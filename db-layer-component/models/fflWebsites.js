const { DataTypes, Model, Op } = require("sequelize");

class WebsitesActions extends Model {
  static async createModel(pool) {
      return WebsitesActions.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          license_key: {
              type: DataTypes.STRING,
              allowNull: false
          },
          dealer_id: {
              type: DataTypes.STRING,
              allowNull: false
          },
          website: {
              type: DataTypes.STRING,
              allowNull: false
          },
          is_primary: {
              type: DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: false
            },
            source: {
                type: DataTypes.STRING,
            },
            
            created_by: {
                type: DataTypes.STRING,
            },
            updated_by: {
                type: DataTypes.STRING,
            },
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            
            

      }, {
        sequelize: pool,
        createdAt: "created_at",
          updatedAt: "updated_at",
        tableName:"dealer_website_actions"
    });
}
}

module.exports = WebsitesActions;
