import { useId } from "react"
import "../../../css/input_container.css"
import { useState,useEffect } from "react";
const Table_input = ({reference,setMostrar,data,value_edit=null})=>{
  const id = useId();
  const [datos,setDatos] = useState({});
  const handle_update= (e)=>{
    const {name,value} = e.target;
    setDatos({...datos,[name]:value});
  }
  useEffect(()=>{
    console.log(datos)
  },[datos])
  const handle_submit = async(e)=>{
    e.preventDefault();
    console.log(reference)
    const requestOptions={
      method:"PUT",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(datos)
    }
    const requestOptionsget={
      method:"GET",
      headers:{
        'Content-Type':'application/json',
      },
      // body:JSON.stringify(datos)
    }

    const resultado =await fetch(reference,requestOptionsget).then(
      response =>{
        if(!response.ok){

          throw new Error('Error al actualizar los datos');
        }
        return response.json();
      }
    )
    console.log(resultado);
    await fetch(reference,requestOptions).then(
      response =>{
        if(!response.ok){

          throw new Error('Error al actualizar los datos');
        }
        return response.json();
      }
    )
    
  }

  return <>
      <div className="cuerpo_input">
        <div className="cartel">
          <p>Habitacion</p>
        </div>
        <form onSubmit={handle_submit}>
          <div className="text_in">
            {
              data&&data.map(
                (dato)=>
                    (
                      <div className="input-container" key={dato.id+"-"+id}>
                        <label  htmlFor={dato.id+"-"+id}>{dato.title}</label>
                        <input onChange={handle_update} type={dato.type} value={value_edit?value_edit:null} className="input" id={dato.id+"-"+id} name={dato.name} placeholder={dato.placeholder}/>
                      </div>
                      
                    )
              )
            }
          </div>
          <div className="adjust_submit">
            <input className="button_send" type="submit" value={"Enviar"}/>
            <input onClick={()=>setMostrar(false)} className="button_cancel" type="button" value={"Cancelar"}/>
          </div>
        </form>
      </div>
  </>
}
export {
  Table_input
}