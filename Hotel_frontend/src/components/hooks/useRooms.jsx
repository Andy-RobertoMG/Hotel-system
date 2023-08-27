import { useInfiniteQuery } from "react-query";
import { useQuery,useMutation } from "react-query";
import { getRoom_ById, getRooms,postRooms } from "../service/rooms_S";
export const useRooms = ()=>{
 return  useQuery(
    ["rooms"],
    // async () => await fetchUsers(1)
    getRooms,
    {
      refetchOnWindowFocus:false
    },
  )
}
export const request = (name,request)=>{
 return  useQuery(
    [name],
    // async () => await fetchUsers(1)
    request,
    {
      refetchOnWindowFocus:false
    },
  )
}
export const useRooms_ById = (id)=>{
  return useQuery(
    ["rooms",id],
    // async () => await fetchUsers(1)
    ()=>getRoom_ById(id),
    {
      enabled:id!==null,
      refetchOnWindowFocus:true
    }
  )
  return {isLoading,isError,data}
}
