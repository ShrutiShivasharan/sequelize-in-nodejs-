'use strict';

const { Types } = require('mysql2');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      name: { allowNull: false, type: Sequelize.STRING },
      category: { allowNull: false, type: Sequelize.STRING },
      price: { allowNull: false, type: Sequelize.INTEGER },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
