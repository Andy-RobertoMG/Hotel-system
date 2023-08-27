import { Outlet } from "react-router-dom";
// import '../../../css/table.css'
import  '../../../css/table_responsive.css';
import { Table_input } from "../table_input/table_input";
import { useState } from "react";
import { useEffect } from "react";
import Eliminate from './../eliminate';
import * as yup from "yup"
import Swal from 'sweetalert2';
import { addData_table, delete_table, update_table } from "./update_data";
yup.setLocale({
  mixed: {
    // notType: "${path} debe ser un tipo válido",
    notType: "El campo debe estar lleno",
  },
});
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

const getCsrfToken = () => {
  const csrfCookie = document.cookie.split(';')
    .find(cookie => cookie.trim().startsWith('XSRF-TOKEN='));
  if (csrfCookie) {
    return csrfCookie.split('=')[1];
  }
  return null;
};


const Tabla = ({schema,inicialization,edit,datos,show,reference,params=null,getAll=null})=>{
  const [mostar_ti, setmostrar] = useState(false);
  const [temporal,setTemporal]= useState({});
  const [datos_send,setDatos] = useState({});
  const [mostrar_edit,setMostrar_edit] = useState(false);
  const [information,setInformation] = useState([]);
  const [id_search,setId] = useState(null);
  const [errors, setErrors] = useState({});

  const handle_update= (e)=>{
    const {name,value,type} = e.target;
    
    // console.log(e.target);
    // console.log(e.target.type)
    // Verifica si el valor es numérico utilizando la función isNaN (is Not a Number)
  // Si no es un número válido, no realiza la conversión y simplemente actualiza el estado
  if (!isNaN(value)&&type!="text"){
    // Convierte el valor a número usando parseFloat para números decimales
    // o parseInt para números 
    let parsedValue =value;
    if(value!=""){
      parsedValue=  parseFloat(value); // o parseInt(value) para enteros
    }
    // Actualiza el estado con el valor convertido
    setDatos({ ...datos_send, [name]: parsedValue });
  } else {
    // Si no es un número válido, simplemente actualiza el estado con el valor actual
    setDatos({ ...datos_send, [name]: value });
  }
  } 
  useEffect(()=>{
    // console.log("Todos")
    // console.log(datos_send)
    // console.log(inicialization)
    // console.log("datos")
    // console.log(datos)
    // console.log("Show")
    // console.log(show)
    // console.log(reference)

  },[])
  useEffect(()=>{
    if(!mostar_ti||!mostrar_edit){
      // SearchAll();
      setErrors({});
    }
  },[mostar_ti,mostrar_edit])
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
    // console.log(id)
    const url = reference+ `/${id}`;
    let extraction = await fetch(url,requestOptionsget)
    .then((response)=>{
      return response.json();
    });
    return extraction;
  }
  useEffect(()=>{
    if(!mostar_ti&&!mostrar_edit){
      setDatos(inicialization);
    }
  },[mostar_ti,mostrar_edit])
  const Edit = async (e)=>{
    let id = e.target.id;
    // console.log(e.target.id)
    let extracted = await FindById(id);//Hay un problema donde si no recibe los datos buscados se guardara el error, hay que implementar try
    // console.log(extracted)
    setMostrar_edit(true);
    setId(id);
    setDatos(extracted);
  }
  const Delete = async (e)=>{
    e.preventDefault()
    // const csrf = getCsrfToken();
    Swal.fire({
      heightAuto:false,
      title: '¿Estas seguro de eliminarlo?',
      text: "No seras capas de revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo',
      cancelButtonText:"Cancelar"
    })
    .then(async(result)=>{
      let url = reference+`/${e.target.id}`;
      if(result.isConfirmed){
        // console.log(result)
        try{
          // console.log(url);
          let resultado = await fetch(url,{...requestOptionsDelete});
          if(!resultado?.ok){
            throw new Error("Algo salio mal",{cause:{resultado}})
          }
          if(resultado.ok)
          {
              console.log(e.target.id)
              const objeto = delete_table(e.target.id,information);  
              console.log(objeto);
              setInformation(objeto);
              Swal.fire(
                {
                  heightAuto:false,
                  title:'Eliminado',
                  text:"Se ha eliminado exitosamente",
                  icon:"success"
                }
              )
          }
        }catch(error){
          const res = await error.cause.resultado.json();
          Swal.fire(
            {
              heightAuto:false,
              text:res?.errorMessage,
              title:"Algo salio mal",
              icon:"error"
            }
          )
        }
      } 
      if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
        ) {
        // console.log("asdas")
        Swal.fire(
          {
            heightAuto:false,
            title:"Cancelado",
            text:"Se ha calcelado la petición"
            ,timer:5000
          }
        )
      }
      
      
    })
     
  }
  const schema2 = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  edad: yup.number().required("La edad es obligatoria").positive("La edad debe ser positiva"),
  email: yup.string().email("El formato del correo electrónico no es válido"),
});
  const data2 = {
  nombre: "Juan",
  edad: 25,
  email: "juan@example.com",
};
const Check2 = async()=>{
  try{
    console.log("Entra")
    console.log(data2)
    await schema2.validate(data2,{abortEarly:false})
  }catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      console.log(newErrors)
      // setErrors(newErrors);
    }
  
}
  const Check_data = async(data)=>{
    // console.log(datos_send)
    try{
      // console.log(datos_send)
      const resultado =await schema.validate(datos_send,{abortEarly:false});
      // console.log(resultado);
    }catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      throw newErrors;
    }
  }
  const Create = async(e)=>{
    e.preventDefault();
    await Check2();
    let objeto = datos_send;
    try{
      await Check_data();
      setErrors({});
      if(!objeto.id){
        delete objeto.id;
      }
      try{
        let resultado = await fetch(reference,{...requestOptionsPost,body:JSON.stringify(objeto)})
          .then(response=>{
            return response.json()
        });
          const table_updated = addData_table(resultado,information);
          console.log(table_updated);
          setInformation(table_updated)
          setDatos(inicialization);
      }catch(e){
        console.log(e);
      }
      console.log(inicialization)
      
      setmostrar(false);
    }catch(error){
      setErrors(error);
    }
  }
  const Edition = async(e)=>{
    e.preventDefault();
    // console.log(id_search)
    let url = reference+`/${id_search}`;
    console.log(datos_send)
    // console.log(url);
    // console.log(requestOptionsPut)
    try{
      await Check_data();
      setErrors({});
      console.log(datos_send)
      let resultado = await fetch(url,{...requestOptionsPut,body:JSON.stringify(datos_send)}).then(async res=>{
        return  await res.json();
      });
      const objeto = update_table(resultado,information);
      setInformation(objeto);
      setDatos(inicialization);
      setMostrar_edit(false)
    }catch(error){
      console.log(error)
      setErrors(error);
    }
  }
  const SearchAll = async ()=>{
    const resultado = await fetch(reference,requestOptionsget).then(
      response => {
          if(!response?.ok)
            throw new Error("Error al extraer los datos")
          return response.json();
        }
      )
    console.log(resultado)
    setInformation(resultado);
  }
  useEffect( ()=>{
    const funcion = async()=>{
      if(reference){
        setDatos(inicialization)
        try{
          SearchAll();
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
            // console.log(general.select)
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
      mostar_ti||mostrar_edit&&<div className="background"> </div>

    }
    {
      mostar_ti&&<Table_input error={errors} datos_send={datos_send} setMostrar={setmostrar} handle_submit={Create} handle_update={handle_update} data={temporal}/>
    }
    {
      mostrar_edit&&<Table_input error={errors} edit={true} setMostrar={setMostrar_edit} handle_submit={Edition} handle_update={handle_update} datos_send={datos_send} data={temporal} />
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
                          // console.log(item)
                          // if(child?.key_foreign){
                          //   return <td key={child.id} id={item[child.name].id}>{item[child.name].title}</td>
                          // }
                          
                          return <td key={child.id}>{item[child.name]}</td>
                        })
                      }
                      {/* {
                        console.log(item)
                      } */}
                      <td className="td_table" id={item.id} onClick={Edit} >Editar</td>
                      <td className="td_table" id={item.id} onClick={Delete}>Eliminar</td>
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