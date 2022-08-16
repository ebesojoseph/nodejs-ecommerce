const { Sequelize } = require('sequelize');
require("dotenv").config();
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql"/* one of '' | 'mariadb' | 'postgres' | 'mssql' */
});

try {
 (async ()=>{
  await sequelize.authenticate();
 })();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


module.exports = sequelize;