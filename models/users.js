'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // one to many
      Users.hasMany(models.Post, { foreginKey: 'userId' });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, allowNull: false, unique: { msg: 'email already used!' },
      validate: { notEmpty: { msg: 'Email is required!' }, isEmail: { msg: 'Email is invalid' } }
    },
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
    //use hooks
    hooks:{
      beforeCreate: async(Users, Options)=>{
        if(Users.password){
          const salt = await bcrypt.genSalt(10);
          Users.password = await bcrypt.hash(Users.password, salt);
        }
      }
    }
  });
  return Users;
};