import Tabla from "../reutils/table/table"
import  '../../css/table_input.css';
import { Table_input } from "../reutils/table_input/table_input";
import {Room_show, TypeRoom_show, rooms_input,typeRoom_input} from "./data_input"
import { useState } from "react";
const Rooms = ()=>{
  const [table,setTable] = useState(false)
  return <div className="principal_cl">
    <div>
      <p>
        Habitaciones  
      </p>
    </div> 
    
    <Tabla datos={rooms_input} show={Room_show} reference={"http://192.168.56.1:4000/rooms/"}>
    </Tabla>
    <Tabla datos={typeRoom_input} show={TypeRoom_show}getAll={"http://192.168.56.1:4000/rooms/type"} reference={"http://192.168.56.1:4000/rooms/type"}>

    </Tabla>
  </div>
}
export {
  Rooms
}