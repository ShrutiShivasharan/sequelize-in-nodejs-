'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate(models) {
      // one to many
      // Orders.belongsTo(models.Products, { foreignKey: 'productId' });
        Orders.belongsTo(models.Products, { foreignKey: 'productId', as: 'product' });

      // // many to many
      // Orders.belogsToMany(models.Products, {
      //   through: 'OrderProducts',
      //   foreignKey: 'productId'
      // });

      // one to one
      // Orders.belongsTo(models.Products, { foreignKey: 'productId' });
    }
  }
  Orders.init({
    productId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
    timestamps: false
  });
  return Orders;
};