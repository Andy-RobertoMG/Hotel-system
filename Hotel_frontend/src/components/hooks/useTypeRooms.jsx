import { useInfiniteQuery } from "react-query";
import { useQuery,useMutation } from "react-query";
import { getTypeRoom } from "../service/typeroom_S";
import { postTypeRoom } from './../service/typeroom_S';
import { getRoom_ById } from "../service/rooms_S";
export const useTypeRoom = ()=>{
  return useQuery(
    ["typeroom"],
    getTypeRoom,
    {
      refetchOnWindowFocus:false
    }
  )
  
}
export const useTypeRoom_ById = (id)=>{
  return useQuery(
    ["typeroom",id],
    // async () => await fetchUsers(1)
    (id)=>getRoom_ById(id),
    {
      enabled: id!==null,
      refetchOnWindowFocus:false
    }
  )
}
