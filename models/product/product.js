const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const ProductItem = sequelize.define("ProductItem", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  imageUrl: DataTypes.STRING,
});

ProductItem.sync();

module.exports = ProductItem;
