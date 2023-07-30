import { useId } from "react"
import "../../../css/input_container.css"
import { useState,useEffect } from "react";
import { DropDown } from "../dropdowns/dropdown";
import { DropDown_SO } from "../dropdowns/dropdown_Single";
const Table_input = ({datos_send=null,setMostrar,handle_submit=null,handle_update=null,data})=>{
  const id = useId();
  useEffect(()=>{
    if(data){
      
    }
  },[data])
  return <>
      <div className="cuerpo_input">
        <div className="cartel">
          <p>Habitacion</p>
        </div>
        <form id={datos_send.id} onSubmit={handle_submit}>
          <div className="text_in">
            {
              data&&data.map(
                (dato)=>
                    (
                      <div className="input-container" key={dato.id+"-"+id}>
                        <label  htmlFor={dato.id+"-"+id}>{dato.title}</label>
                        {
                          (dato.type!="select")&&
                          <input onChange={handle_update} type={dato.type}   className="input" id={dato.id+"-"+id} name={dato.name} value={datos_send[dato.name]} placeholder={dato.placeholder}/>
                        }
                        {
                          (dato.type=="select")&&<DropDown_SO dato_choosen={datos_send[dato.name]} name={dato.name} handle_update={handle_update} items={dato.value}/>
                        }
                      </div>
                      
                    )
              )
            }
          </div>
          <div className="adjust_submit">
            <input  /*onClick={()=>setMostrar(false)} */ className="button_send" type="submit" value={"Enviar"}/>
            <input onClick={()=>setMostrar(false)} className="button_cancel" type="button" value={"Cancelar"}/>
          </div>
        </form>
      </div>
  </>
}
export {
  Table_input
}