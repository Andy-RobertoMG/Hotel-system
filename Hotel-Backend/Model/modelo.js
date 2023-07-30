import sequelize from '../bd/base_de_datos.js';
import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'
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
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull:false,
    defaultValue: () => uuidv4(), // Asigna un UUID aleatorio por defecto
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
    allowNull: true,
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
  hooks:{
    beforeCreate: async (usuario)=>{
      const salt = await bcrypt.genSalt(10);
      usuario.pass = await bcrypt.hash(usuario.pass,salt);
    }
  }
},
);
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
const Roomtype = sequelize.define("Roomtype",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull:false,
      defaultValue: () => uuidv4(), // Asigna un UUID aleatorio por defecto
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'title', // Si el nombre de la columna es diferente al nombre del atributo
      comment: 'Titulo',
    },
    descr: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'descr', // Si el nombre de la columna es diferente al nombre del atributo
      comment: 'Description',
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Roomtype',
    tableName: 'Roomtype', // Nombre de la tabla en la base de datos
    timestamps: false, // Si no necesitas campos de fecha "createdAt" y "updatedAt"
  }
);
const Room = sequelize.define("Room",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      // defaultValue: () => uuidv4(), // Asigna un UUID aleatorio por defecto
    },
        
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    roomtype_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references:{
        model:Roomtype,
        key:'id'
      }
    },
  },
  {
    sequelize,
    modelName: 'Room',
    tableName: 'Room', // Nombre de la tabla en la base de datos
    timestamps: false, // Si no necesitas campos de fecha "createdAt" y "updatedAt"
  }  
)
// Establecer la relación de clave foránea entre Room y Roomtype
Room.belongsTo(Roomtype, { foreignKey: 'roomtype_id', targetKey: 'id' });
Roomtype.hasMany(Room, { foreignKey: 'roomtype_id', sourceKey: 'id' });
// Roomtype.hasMany(Room,{foreignKey:''})
// Users.belongsTo(Permission, { foreignKey: 'per_id' });
Users.prototype.verificarPassword = function(password){
  return bcrypt.compareSync(password,this.pass);
}
Permission.hasMany(Users,{foreignKey:'per_id'});
Users.hasOne(Permission,{foreignKey:'per_id'});
export {Roomtype,Room,Rol,Users,Permission};