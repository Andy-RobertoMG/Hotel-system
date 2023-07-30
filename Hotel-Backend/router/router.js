import express from 'express';
import {Router} from 'express';
const router = express.Router();
import { dirname,join } from 'path';
import { fileURLToPath } from 'url';
import {createUser, getUsers,updateUsers} from "../Controller/controlador.js"
import { validateRegister,validateRoom,validateTypeRoom } from '../validators/users.js';
import { Delete, createRoom, createTypeRoom, deleteTypeRoom, getByIdRoom, getByIdTypeRoom, getRoom, getTyperoom, updateRoom, updateRoomtype } from '../controller/controller_rooms.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
export default function(){

    router.get("/",getUsers)
    router.put("/",updateUsers);
    router.get("/login");
    router.put("/auth/register",validateRegister,createUser);

    router.get("/rooms/",getRoom);
    
    router.get("/rooms/:id",getByIdRoom);
    router.post("/rooms/",validateRoom,createRoom);
    router.put("/rooms/",validateRoom,updateRoom);
    router.delete("/rooms/:id",Delete)

    router.get("/typeroom/",getTyperoom);
    router.post("/typeroom/",validateTypeRoom,createTypeRoom);
    router.put("/typeroom/:id",validateTypeRoom,updateRoomtype);
    router.get("/typeroom/:id",getByIdTypeRoom);
    router.delete("/typeroom/:id",deleteTypeRoom);

    router.get("/libros",(req,res)=>{
        //res.sendFile(join(__dirname,'../Public/Views/libros.html'))
        req.body;
        
    })
    
    return router;
};
