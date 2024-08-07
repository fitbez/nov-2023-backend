const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
});

User.sync(); // This line ensures the table is created if it doesn't exist already

module.exports = User;
