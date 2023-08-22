export const getTypeRoom = async ()=>{
  return await fetch(`http://192.168.56.1:8080/typeroom`,
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
export const getTypeRoom_ById = async (id)=>{
  return await fetch(`http://192.168.56.1:8080/typeroom/${id}`,
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
  }).catch(error =>{
    console.log(error)
  })
}
export const postTypeRoom = async (typeroom)=>{
  return await fetch(`http://192.168.56.1:8080/typeroom`,
    {
      method:"GET",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(typeroom)

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