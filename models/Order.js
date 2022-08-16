const { Model, DataTypes } = require("sequelize/types");
const sequelize = require("../database");

class Order extends Model {}

Order.init(
  {
    id: DataTypes.INTEGER,
    user_id:DataTypes.INTEGER,
  },
  {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    sequelize: sequelize,
    modelName: "Order",
  }
);

Order.associate = (model) => {
    Order.belongsTo(model.User, {
       foreignKey: 'id',
       target: 'id'
    });
 };