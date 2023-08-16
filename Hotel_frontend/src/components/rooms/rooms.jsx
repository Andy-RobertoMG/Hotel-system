import Tabla from "../reutils/table/table"
import  '../../css/table_input.css';
import { Table_input } from "../reutils/table_input/table_input";
import {inicialization_TR,Room_show, TypeRoom_show, rooms_input,typeRoom_input, inicialization_R} from "./data_input"
import { useState } from "react";
import {object,string,number} from "yup"
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useEffect } from "react";
import {  useRooms, useRooms_ById } from "../../hooks/useRooms";
import { useTypeRoom, useTypeRoom_ById} from "../../hooks/useTypeRooms";
import { postRooms } from "../../service/rooms_S";
import { postTypeRoom } from "../../service/typeroom_S";
const Room_schema = object({
  id: number().required("El campo id es obligatorio").min(1,"La id no puede ser menor a 1"),
  floor:number().required("El campo piso es obligatorio").min(1,"El piso no puede ser menor a 1"),
  roomtype_id:string().required("Se debe seleccionar un tipo de habitación")
})
const TypeRoom_schema = object({
  price:number().required("El campo precio es obligatorio").min(1,"El precio no puede ser inferior a 1"),
  desc:string().required("La descripcion del tipo de habitación es necesaria"),
  title:string().required("El capo titulo es obligatorio")
})
const Rooms = ()=>{
  const [table,setTable] = useState(false)
  const rooms =useRooms();
  const typeroom = useTypeRoom();
  const rooms_id = useRooms_ById;
  // const typeroom_id = useTypeRoom_ById();
  const queryClient = useQueryClient();
  // const mutation_room = useMutation({
  //   mutation:postRooms,
  //   onSuccess: async(newRoom)=>{
  //       await queryClient.setQueriesData(['rooms'],(oldData)=>{
  //         if(oldData==null) return [newRoom];
  //         return [...oldData,newRoom];
  //       })
  //     }
  //   }
  // )
  // const usePostTR = useMutation(
  //   {
  //     mutationFn:postTypeRoom,
  //     onSuccess: async (newTypeRoom) =>{
  //       await queryClient.setQueriesData(['typeroom'],(oldData)=>{
  //         if(oldData ==null) return [newTypeRoom];
  //         return [...oldData,newTypeRoom];
  //       })
  //     }
  //   }
  // )
  useEffect(()=>{
    // console.log(rooms_id.data)
    
  },[])
  return <div className="principal_cl">
    <div>
      <p>
        Habitaciones  
      </p>
    </div> 
    
    <Tabla schema={Room_schema} name={"rooms_"} query_dataId={rooms_id} query_data={rooms} query_mutation={null} datos={rooms_input} inicialization={inicialization_R} show={Room_show}  reference={"http://192.168.56.1:8080/rooms"}>
    </Tabla>
    <Tabla schema={TypeRoom_schema} name={"typeroom_"} query_mutation={null} query_data={typeroom} datos={typeRoom_input} inicialization={inicialization_TR} show={TypeRoom_show}  getAll={"http://192.168.56.1:8080/typeroom"} reference={"http://192.168.56.1:8080/typeroom"}>
    </Tabla>
  </div>
}
export {
  Rooms
}