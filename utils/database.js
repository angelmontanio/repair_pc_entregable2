const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '26432643',
  database: 'pc_repair',
  logging: false,
});

module.exports = { db };
