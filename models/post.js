'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // one to many
      Post.belongsTo(models.Users, { foreignKey: 'userId' });
    }
  }
  Post.init({
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};