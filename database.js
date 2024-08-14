const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "example_database",
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected."))
  .catch((err) => console.error("Unable to connect:", err));

module.exports = sequelize;
