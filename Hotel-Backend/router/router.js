import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
import {getUsers,updateUsers} from "../Controller/controlador.js"
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function(){

    router.get("/",getUsers)
    router.put("/",updateUsers);
    router.get("/login");
    router.put("/login");
    router.get("/libros",(req,res)=>{
        //res.sendFile(join(__dirname,'../Public/Views/libros.html'))
        req.body;
        
    })
    
    return router;
};
