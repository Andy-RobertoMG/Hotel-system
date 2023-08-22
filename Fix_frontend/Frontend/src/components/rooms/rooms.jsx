import Tabla from "../reutils/table/table"
import  '../../css/table_input.css';
import { Table_input } from "../reutils/table_input/table_input";
import {inicialization_TR,Room_show, TypeRoom_show, rooms_input,typeRoom_input, inicialization_R} from "./data_input"
import { useState } from "react";
import {object,string,number} from "yup"
import { useQuery } from "react-query";
import { useEffect } from "react";
const Room_schema = object({
  id: number().required("El campo id es obligatorio").min(1,"La id no puede ser menor a 1"),
  floor:number().required("El campo piso es obligatorio").min(1,"El piso no puede ser menor a 1"),
  roomtype_id:string().trim().required("Se debe seleccionar un tipo de habitación")
})
const TypeRoom_schema = object({
  price:number().required("El campo precio es obligatorio").min(1,"El precio no puede ser inferior a 1").max(1000000,"El precio supera el maximo permitido el cual es de 1000000"),
  descr:string().trim().required("La descripcion del tipo de habitación es necesaria"),
  title:string().trim().required("El capo titulo es obligatorio")
})

const Rooms = ()=>{
  const [table,setTable] = useState(false)
  const fetchUsers = async(page)=>{
    // console.log("hola");
    return await fetch("http://192.168.56.1:8080/rooms",{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
      },
    }).
    then(async res=>{
      if(!res.ok) 
      {
        throw new Error("Error en la petición")
      }
      // console.log( res)
      return await res.json()
    })
    .then(res => {
      console.log(res);
      return res;
    });
  }
 

  return < >
    <div>
      <p>
        Habitaciones  
      </p>
    </div> 
    
    <Tabla schema={Room_schema} datos={rooms_input} inicialization={inicialization_R} show={Room_show}  reference={"http://192.168.56.1:8080/rooms"}>
    </Tabla>
    <Tabla schema={TypeRoom_schema} datos={typeRoom_input} inicialization={inicialization_TR} show={TypeRoom_show}  getAll={"http://192.168.56.1:8080/typeroom"} reference={"http://192.168.56.1:8080/typeroom"}>
    </Tabla>
  </>
}
export {
  Rooms
}