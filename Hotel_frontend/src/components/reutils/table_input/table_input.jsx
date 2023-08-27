import { useId } from "react"
import "../../../css/input_container.css"
import { useState,useEffect } from "react";
import { DropDown } from "../dropdowns/dropdown";
import { DropDown_SO } from "../dropdowns/dropdown_Single";
const Table_input = ({error,edit=false,datos_send=null,setMostrar,handle_submit=null,handle_update=null,data})=>{
  const [id_edit,setId] = useState(null);
  const id = useId();
  useEffect(()=>{
    if(data){
      // console.log(id_edit)
      // console.log(data)
      // console.log(datos_send)
    }
  },[data,datos_send])
  useEffect(()=>{
    setId(datos_send.id);
  },[])
  // console.log("hola");
  return <>
      <div className="cuerpo_input">
        <div className="cartel">
          <p>Habitacion</p>
        </div>
        <form data-form-id={id_edit} onSubmit={handle_submit}>
          <div className="text_in">
            {
              data&&data.map(
                (dato)=>
                    (
                      <div className="input-container" key={dato.id+"-"+id}>
                        <label  htmlFor={dato.id+"-"+id}>{dato.title}</label>
                        <div className="input_body">
                            {
                              (Object.keys(error).includes(dato.name))&&
                              <h5 className="error_input">{error[dato.name]}</h5>
                            }
                            {
                              (dato.type!="select")&&
                              <input onChange={handle_update} type={dato.type} disabled={dato?.edit&&edit}  className="input" id={dato.id+"-"+id} name={dato.name} value={datos_send[dato.name]} placeholder={dato.placeholder}/>
                            }
                            {
                              (dato.type=="select")&&<DropDown_SO placeholder_={dato.placeholder} dato_choosen={datos_send[dato.name]} name={dato.name} handle_update={handle_update} items={dato.value}/>
                            }
                            </div>
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