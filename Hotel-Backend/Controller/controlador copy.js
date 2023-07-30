import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
// console.log("hola"+import.meta.url);
// const router = Router();
import { resolve } from 'path';
import pool from "../bd/base_de_datos.js"
const getUsers = async (req,res)=>{
    const response = await pool.query('Select * from Users')
    //console.log(response.rows);
    res.send(response.rows)
}
const updateUsers = async (req,res) =>{
    const {name,phone,email,address} = req.body;

    // console.log(req.body);
    // console.log("que estas haciendo")
    // res.send("Creando")
    //var date;
    //date.name =" Esteban";
    const update = await pool.query("update Users set user_name = $1",[name]);
    res.send("Enviado");
    //console.log(update);
}   
export {
    getUsers,
    updateUsers
};