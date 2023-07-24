import { Outlet } from "react-router-dom";
// import '../../../css/table.css'
import  '../../../css/table_responsive.css';
import { Table_input } from "../table_input/table_input";
import { useState } from "react";
import { useEffect } from "react";
const Tabla = ({datos,reference,params=null,getAll=null})=>{
  const [mostar_ti, setmostrar] = useState(false);
  const [mostrar_edit,setMostrar_edit] = useState(false);
  const [information,setInformation] = useState([]);
  
  const getTableHeaders = () => {
    if (information.length > 0) {
      return Object.keys(information[0]).filter((id)=>{
        if(id!="id"){
          return true;
        }else{
          return false;
        }
      });
    }
    return [];
  };
  const Editar = async (e)=>{
    
    let id = e.target.id;
    const url = reference+ `/${id}`;
    const requestOptionsget={
          method:"GET",
          headers:{
            'Content-Type':'application/json',
          },
          // body:JSON.stringify(datos)
        }
    let extraction = await fetch(url,requestOptionsget)
    .then((response)=>{
      return response.json();
    });
    console.log(extraction);
  }
  useEffect(()=>{
    const funcion = async()=>{
      if(reference){
        const requestOptionsget={
          method:"GET",
          headers:{
            'Content-Type':'application/json',
          },
          // body:JSON.stringify(datos)
        }
        console.log("http://"+reference)
        const resultado = await fetch(reference,requestOptionsget).then(
        response =>{
          if(!response.ok){
          
            throw new Error('Error al actualizar los datos');
          }
          return response.json();
          }
        )
        setInformation(resultado)
      }
    }
    funcion();
  },[])
  useEffect(()=>{
    console.log(information);
  },[information])
  return (
    <>
    {
      mostar_ti&&<Table_input setMostrar={setmostrar} reference={reference} data={datos}/>
    }
    {
      mostrar_edit&&<Table_input setMostrar={setMostrar_edit} reference={reference} data={datos}/>
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
                information&&
                getTableHeaders().map((header) => (
                  <th key={header}>{header}</th>
                ))
                
              }
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
            
          </thead>
          <tbody>
              {
                information.map((item)=>(
                    <tr key={item.id}>
                      {
                        getTableHeaders().map((child)=>(
                          <td key={child}>{item[child]}</td>
                        ))
                      }
                      <td id={item.id} onClick={Editar} >Editar</td>
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