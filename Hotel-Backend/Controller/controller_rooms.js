import { where } from "sequelize"
import {Rol, Room, Roomtype} from "../model/modelo.js"
import { v4 as uuidv4 } from "uuid"
const createRoom = async(req,res)=>{
  const {id,floor,roomtype_id}= req.body;
  // console.log("Resultado Room")
  // console.log()
  const resultado = Room.create({id,floor,roomtype_id});
  console.log(resultado)
}
const updateRoom = async(req,res)=>{
  const {id, floor,roomtype_id} = req.body;
  const resultado = await Room.update({id,floor,roomtype_id},{where:{id:req.params.id}})
  res.send(resultado);
}
const Delete = async(req,res)=>{
  const {id} = req.params;
  const resultado = await Room.destroy({where:{id:id}})
  res.send("Funciona")
}
const getRoom = async (req,res)=>{
  const resultado = await Room.findAll({include:[Roomtype]});
  // console.log("Resultado Room")
  // console.log(resultado)
  res.send(resultado);
}
const createTypeRoom  = async (req,res) =>{
  const {title,desc,price} = req.body;
  await Roomtype.create({id:uuidv4(),title,desc,price})
  res.status(202);
  res.send({datos:"hola"})
}
const getTyperoom = async (req,res)=>{
  const resultado= await Roomtype.findAll();
  // console.log("Obteniendo todos los tipos de habitaciones")
  // console.log(resultado);
  res.send(resultado);
}
const updateRoomtype = async(req,res)=>{
  const {title,desc,price} = req.body;
  // console.log(req.body);
  const resultado = await Roomtype.update({title,desc,price},{where:{id:req.params.id}});
  // console.log(resultado)
  res.send(resultado);
}
const getByIdRoom = async(req,res)=>{
  const { id} = req.params;
  console.log(id);
  let resultado = await Room.findOne({where:{id:id}})
  console.log(resultado);
  res.send(resultado);
}
const getByIdTypeRoom = async (req,res)=>{
  const id= req.params.id;
  // console.log(id);
  let resultado = await Roomtype.findOne({where:{
    id:id
  }})
  // console.log(resultado)
  res.status(202).send(resultado);
}
const deleteTypeRoom = async (req,res)=>{
  const id = req.params.id;
  let resultado = await Roomtype.destroy({where:{id:id}});
  res.status(202).send(resultado);
}
export {
  deleteTypeRoom,
  Delete,
  getByIdRoom,
  getRoom,
  getByIdTypeRoom,
  updateRoomtype,
  getTyperoom,
  createRoom,
  updateRoom,
  createTypeRoom
}
