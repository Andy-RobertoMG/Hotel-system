import { Outlet } from "react-router-dom";
// import '../../../css/table.css'
import  '../../../css/table_responsive.css';
import { Table_input } from "../table_input/table_input";
import { useState } from "react";
import { useEffect } from "react";
import Eliminate from './../eliminate';
const requestOptionsget={
  method:"GET",
  headers:{
    'Content-Type':'application/json',
  },
}
const requestOptionsDelete={
  method:"DELETE",
  headers:{
    'Content-Type':'application/json',
  },
}
const requestOptionsPut={
  method:"PUT",
  headers:{
    'Content-Type':'application/json',
  },
}
const requestOptionsPost={
  method:"POST",
  headers:{
    'Content-Type':'application/json',
  },
}



const Tabla = ({inicialization,datos,show,reference,params=null,getAll=null})=>{
  const [mostar_ti, setmostrar] = useState(false);
  const [temporal,setTemporal]= useState({});
  const [datos_send,setDatos] = useState({});
  const [mostrar_edit,setMostrar_edit] = useState(false);
  const [information,setInformation] = useState([]);
  const handle_update= (e)=>{
    const {name,value} = e.target;
    setDatos({...datos_send,[name]:value});
  } 
  useEffect(()=>{
    console.log(datos_send)
  },[datos_send])
  const getTableHeaders = () => {
    if(show){
      const filtered =show.filter(({show})=>{
        return (show)?show:false;
      })
      return filtered;
    }
    return [];
  };
  const FindById =async(id)=>{
    console.log(id)
    const url = reference+ `/${id}`;
    let extraction = await fetch(url,requestOptionsget)
    .then((response)=>{
      return response.json();
    });
    return extraction;
  }
  useEffect(()=>{
    console.log("Temporal")
    console.log(temporal)
  },[])
  useEffect(()=>{
    if(!mostar_ti&&!mostrar_edit){
      setDatos(inicialization);
    }
  },[mostar_ti,mostrar_edit])
  const Edit = async (e)=>{
    let id = e.target.id;
    let extracted = await FindById(id);
    setMostrar_edit(true);
    setDatos(extracted);
  }
  const Delete = async (e)=>{
    e.preventDefault()
    let url = reference+`/${e.target.id}`;
    let resultado = await fetch(url,{...requestOptionsDelete})
  }
  useEffect(()=>{
    if(mostar_ti){
      console.log(datos_send)
    }
  },[mostar_ti])
  const Create = async(e)=>{
    e.preventDefault();
    
    let resultado = await fetch(reference,{...requestOptionsPost,body:JSON.stringify(datos_send)}).then(response=>response.json());
    console.log(resultado)
    console.log(resultado.body)
    console.log(resultado.errors)
    console.log(resultado.body.errors)
    setDatos(inicialization);
    
    setmostrar(false);
  }
  const Edition = async(e)=>{
    e.preventDefault();
    console.log(e.target)
    let url = reference+`/${e.target.id}`;
    console.log(url);
    console.log(requestOptionsPut)
    let resultado = await fetch(url,{...requestOptionsPut,body:JSON.stringify(datos_send)});
    setDatos(inicialization);
    setMostrar_edit(false)
  }
  useEffect( ()=>{
    const funcion = async()=>{
      if(reference){
        setDatos(inicialization)
        try{
          console.log(reference)
          const resultado = await fetch(reference,requestOptionsget).then(
          response =>{
            if(!response.ok)
              throw new Error('Error al extraer los datos');
            return response.json();
            }
          )
          setInformation(resultado)
          console.log(resultado);
        }catch(error){
          console.log(error);
        }
      }
    }
    funcion();
    const actualizar_datos = async()=>{
    const actualizacion =  await Promise.all(
    datos.map(async (general) => {
          if (general.type === "select") {
            console.log(general.select)
            let extraction_data = await fetch(general.select, requestOptionsget).then(response => response.json());
            // console.log(extraction_data);
            
            let resultado = extraction_data.map((info) => {
                return {id:info.id,title:info.title};
            });
            general.value = resultado;
            return general;
          } else {
            return general;
          }
        }
      )
    );
    setTemporal(actualizacion);
    }
    actualizar_datos();
    // console.log(temporal)
  },[])
  return (
    <>
    {
      mostar_ti&&<Table_input  datos_send={datos_send} setMostrar={setmostrar} handle_submit={Create} handle_update={handle_update} data={temporal}/>
    }
    {
      mostrar_edit&&<Table_input setMostrar={setMostrar_edit} handle_submit={Edition} handle_update={handle_update} datos_send={datos_send} data={temporal} />
    }
    <div className="outler">
    <div type="button">
      <button onClick={()=>setmostrar(!mostar_ti)}>Crear nuevo</button>
    </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {
                getTableHeaders().map((header) => (
                  <th key={header.id}>{header.title}</th>
                ))
              }
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
            
          </thead>
          <tbody>
              {
                information&&information.map((item)=>(
                    <tr key={item.id}>
                      {
                        getTableHeaders().map((child)=>{
                          // console.log(child)
                          // return <td>2</td>
                          console.log(child)
                          console.log(item)
                          if(child?.key_foreign){
                            return <td key={child.id} id={item[child.name].id}>{item[child.name].title}</td>
                          }
                          return <td key={child.id}>{item[child.name]}</td>
                        })
                      }
                      <td id={item.id} onClick={Edit} >Editar</td>
                      <td id={item.id} onClick={Delete}>Eliminar</td>
                    </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
    
  </>
  )
}
export default Tabla;