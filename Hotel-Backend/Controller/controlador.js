import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("hola"+import.meta.url);
// const router = Router();
import { resolve } from 'path';
import sequelize from "../bd/base_de_datos.js"
import a_ from '../Model/modelo.js';

const getUsers = async (req,res)=>{
    const users = await a_.Users.findAll();
    //const users = await Rol.findAll();
    //console.log(response.rows);
    console.log(users);
    res.send(users)
}
const getRol = async (req,res)=>{
    res.send("Hola");
}
const updateUsers = async (req,res) =>{
    const {name,phone,email,address} = req.body;

    // console.log(req.body);
    // console.log("que estas haciendo")
    // res.send("Creando")
    //var date;
    //date.name =" Esteban";
    const update = await Rol.create({
        name:"Prueba",
        rol_desc:"Test"
    })
    res.send("Enviado");
    //console.log(update);
}   
export {
    getUsers,
    updateUsers
};