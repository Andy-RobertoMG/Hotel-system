import { body } from "express-validator";

export const getRooms = async ()=>{
  return await fetch(`http://192.168.56.1:8080/rooms`,
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json',
      }
    }
  )
  .then(async res =>{
    if(!res.ok) throw new Error("Error en la petición")
    return await res.json()
  }).then((dato)=>{
    // console.log(dato)
    return dato;
  })
}
export const getRoom_ById = async (id)=>{
  return await fetch(`http://192.168.56.1:8080/rooms/${id}`,
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json',
      }
    }
  )
  .then(async res =>{
      if(!res.ok) throw new Error("Error en la petición")
      return await res.json()
    }
  ).then((dato)=>{
      // console.log(dato)
      return dato;
    }
  )
}
export const postRooms = async (rooms)=>{

  return await fetch(`http://192.168.56.1:8080/rooms`,
    {
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(rooms)
    }
  )
  .then(async res =>{
    if(!res.ok) throw new Error("Error en la petición")
    return await res.json()
  }).then((dato)=>{
    // console.log(dato)
    return dato;
  })
}