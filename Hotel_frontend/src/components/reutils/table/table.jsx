import { Outlet } from "react-router-dom";
// import '../../../css/table.css'
import  '../../../css/table_responsive.css';
import { Table_input } from "../table_input/table_input";
import { useState } from "react";
import { useEffect } from "react";
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



const Tabla = ({datos,show,reference,params=null,getAll=null})=>{
  const [mostar_ti, setmostrar] = useState(false);
  const [temporal,setTemporal]= useState({});
  const [datos_send,setDatos] = useState({});
  const [mostrar_edit,setMostrar_edit] = useState(false);
  const [information,setInformation] = useState([]);
  const [id_set,setId] = useState(null);
  const handle_update= (e)=>{
    const {name,value} = e.target;
    setDatos({...datos_send,[name]:value});
  } 
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
    const url = reference+ `/${id}`;
    let extraction = await fetch(url,requestOptionsget)
    .then((response)=>{
      return response.json();
    });
    return extraction;
  }
  const Edit = async (e)=>{
    let id = e.target.id;
    setId(id);
    let extracted = await FindById(id);
    setMostrar_edit(true);
    // const datos_ = datos.map((inf)=>{
    //     const {name} = inf;
    //     return {...inf,["value"]:extracted[name]};
    // })
    // setDatos(datos_);
    console.log(datos_send)
    console.log(extracted)
    console.log(datos)
    setDatos(extracted);
    setTemporal(datos);
  }
  const Delete = async (e)=>{
    e.preventDefault()
    let url = reference+`/${e.target.id}`;
    let resultado = await fetch(url,{...requestOptionsDelete})
    // let extracted = await FindById(id);
  }
  useEffect(()=>{
    if(mostar_ti){
      console.log(datos_send)
    }
  },[mostar_ti])
  const Create = async(e)=>{
    e.preventDefault();
    
    let resultado = await fetch(reference,{...requestOptionsPost,body:JSON.stringify(datos_send)});
    setmostrar(false);
  }
  const Edition = async(e)=>{
    e.preventDefault();
    let url = reference+`/${e.target.id}`;
    console.log(url);
    console.log(requestOptionsPut)
    let resultado = await fetch(url,{...requestOptionsPut,body:JSON.stringify(datos_send)});
    setMostrar_edit(false)
  }
  useEffect(()=>{
    
    const funcion = async()=>{
      if(reference){
        try{
          const resultado = await fetch(reference,requestOptionsget).then(
          response =>{
            if(!response.ok)
              throw new Error('Error al extraer los datos');
            return response.json();
            }
          )
          setInformation(resultado)
        }catch(error){
          console.log(error);
        }
        
      }
    }
    funcion();
    setTemporal(datos);
  },[])
  return (
    <>
    {
      mostar_ti&&<Table_input setMostrar={setmostrar} handle_submit={Create} handle_update={handle_update} data={temporal} id_data={1} />
    }
    {
      mostrar_edit&&<Table_input setMostrar={setMostrar_edit} handle_submit={Edition} handle_update={handle_update} datos_send={datos_send} data={temporal} id_data={id_set} />
    }
    {

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
                        getTableHeaders().map((child)=>(
                          <td key={child.id}>{item[child.name]}</td>
                        ))
                      }
                      <td id={item.id} onClick={Edit} >Editar</td>
                      <td>Eliminar</td>
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