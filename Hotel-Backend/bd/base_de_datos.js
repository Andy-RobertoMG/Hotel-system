import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})
//const {Sequelize} = require('Sequelize')

const sequelize = new Sequelize(process.env.BD_NAME,process.env.BD_USERNAME,process.env.BD_PASS, {
  host: process.env.BD_HOST,
  dialect: process.env.BD_DIALECT/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  ,logging: false
});
const a = sequelize;

export default sequelize;