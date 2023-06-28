import sequelize from '../bd/base_de_datos.js';
import { Router } from 'express';
import { DataTypes } from 'sequelize';
const router = Router();
//import {getUsers} from '../Controller/controlador.js'
//import sequelize from './../bd/base_de_datos';
//router.get('/users',getUsers);
const Rol = sequelize.define('Rol',{
  id:{type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type: DataTypes.STRING(50),
    allowNull:false
  }
  ,
  rol_desc:{
    type:DataTypes.STRING(200)
  }
  
},{
  freezeTableName: true,
  timestamps: false
}
)
const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  pass : {
    type:DataTypes.STRING(100),
    allowNull:false
  },
  number_phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  usertype_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  per_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Permission',
      key: 'per_id',
    },
  },
}, {
  tableName: 'Users',
  timestamps: false,
});
const Permission = sequelize.define('Permission', {
  per_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  per_name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  per_module: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'Permission',
  timestamps: false,
});
Users.belongsTo(Permission, { foreignKey: 'per_id' });
export default {Rol,Users,Permission};