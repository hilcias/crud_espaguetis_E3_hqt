const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 9000,
    username: 'postgres',
    password: 'root',
    database: 'users'
})
module.exports = db

