import {Sequelize} from 'sequelize'
//const {Sequelize} = require('Sequelize')

const sequelize = new Sequelize('Hotel', 'postgres', '2002', {
  host: 'localhost',
  dialect: "postgres"/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  ,logging: false
});
const a = sequelize;

export default sequelize;