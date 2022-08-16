const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    image_url: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Product",
    initialAutoIncrement: 1000,
    freezeTableName: true,
  }
);

// Product.associate = (model) => {

// };
(async () => {
  await sequelize.sync();
})();

module.exports = Product;
