'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate(models) {
      Products.hasMany(models.Orders, { foreignKey: 'productId', as: 'orders' });
    }
  }

  Products.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: false
  });

  return Products;
};






// 'use strict';
// const { Model } = require('sequelize');


// module.exports = (sequelize, DataType) => {

//     class Orders extends Model {

//         static associate(models) {
//             // one to many
//             Products.hasMany(models.Orders, { foreginKey: 'productId' });
//             // Products.hasMany(models.Orders, { foreignKey: 'productId', as: 'orders' });

//             // many to many
//             //  Products.belogsToMany(models.Orders, {
//             //     through: 'OrderProducts',
//             //     foreginKey: 'productId'
//             //  });

//             //one to one
//             // Products.hasOne(models.Orders, {foreginKey: 'productId'});
//         }
//     }

//     const Products = sequelize.define('Products', {
//         name: { type: DataType.STRING, allowNull: false },
//         category: { type: DataType.STRING, allowNull: false },
//         price: { type: DataType.INTEGER, allowNull: false },
//     }, {
//         timestamps: false
//     });

//     return Products
// }