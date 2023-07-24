import { useId } from "react"
import "../../../css/input_container.css"
import { useState,useEffect } from "react";
const Table_input = ({datos_send=null,setMostrar,handle_submit=null,handle_update=null,data,id_data})=>{
  const id = useId();
  useEffect(()=>{
    console.log(datos_send)
    console.log(data)
    console.log(datos_send)
  },[datos_send])
  return <>
      <div className="cuerpo_input">
        <div className="cartel">
          <p>Habitacion</p>
        </div>
        <form id={id_data} onSubmit={handle_submit}>
          <div className="text_in">
            {
              data&&data.map(
                (dato)=>
                    (
                      <div className="input-container" key={dato.id+"-"+id}>
                        <label  htmlFor={dato.id+"-"+id}>{dato.title}</label>
                        {
                          datos_send?
                          <input onChange={handle_update} type={dato.type}  className="input" id={dato.id+"-"+id} name={dato.name} value={datos_send[dato.name]} placeholder={dato.placeholder}/>
                          :
                          <input onChange={handle_update} type={dato.type}  className="input" id={dato.id+"-"+id} name={dato.name} placeholder={dato.placeholder}/>
                        }
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