import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
import {createUser, getUsers,updateUsers} from "../Controller/controlador.js"
import { validateRegister } from '../validators/users.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function(){

    router.get("/",getUsers)
    router.put("/",updateUsers);
    router.get("/login");
    router.put("/auth/register",validateRegister,createUser);
    router.get("/libros",(req,res)=>{
        //res.sendFile(join(__dirname,'../Public/Views/libros.html'))
        req.body;
        
    })
    
    return router;
};
