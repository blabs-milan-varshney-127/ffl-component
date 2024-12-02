const fs = require("fs");
const Sequelize = require("sequelize");
const cls = require('cls-hooked');

let sequelize = null
class dbAuth {
  connectWithDB = async () => {
    if (!sequelize) sequelize = await this.loadSequelize();
    else {
      console.log("restart connection pool to ensure connections are not re-used across invocations")
      sequelize.connectionManager.initPools();
      if (sequelize.connectionManager.hasOwnProperty("getConnection"))
        delete sequelize.connectionManager.getConnection;
    }
    return sequelize
  }

  loadSequelize = async () => {
    const namespace = cls.createNamespace('ffl-namespace');
    Sequelize.useCLS(namespace);

    console.log(`${process.env.DATABASE}, ${process.env.USER}, ${process.env.HOST}, ${process.env.PORT}, ${process.env.AWS_REGION}`);
    // connect with db
    const dialect = "postgres";
    const ssl_cert_path = process.env.SSL_PATH || "/opt/nodejs/us-east-2-bundle.pem";
    const poolOptions = {
      max: 2,
      min: 0,
      idle: 0,
      acquire: 3000,
      evict: 900,
    };
    sequelize = new Sequelize(
      process.env.DATABASE,
      process.env.USER,
      process.env.RDS_PASSWORD,
      {
        host: process.env.HOST,
        dialect,
        dialectOptions: { ssl: { ca: fs.readFileSync(ssl_cert_path).toString() } },
        pool: poolOptions,
        benchmark: true,
        logging: (...msg) => { console.log("Sequelize Logs:", msg) }
      }
    );
    await sequelize.authenticate();
    console.log("Connected with DB:");
    return sequelize;
  }
}

module.exports = new dbAuth();
