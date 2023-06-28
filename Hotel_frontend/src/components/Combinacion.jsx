import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
const Extraer = ()=>{
  const getList = async(event)=>{
    event.preventDefault();
    console.log("hola")
    const lista = await fetch("http://localhost:4000/")
    const lista_1 = await lista.json();
    console.log("hola2")
    console.log(lista_1);
    
  }
    return (<>
      <div>
            <button onClick={getList}>Buscar</button>
            Name: 
         </div>
    </>)
}
const Combinacion = ()=>{
    return (
      <>
        <Header/>
        <Outlet/>
        {/* <Extraer/> */}
        <Footer/>
      </>  
    )
}

const Fechas=()=>{
  fecha = [new Date("2023/1/5")];
  console.log(fecha[0]);
  return (
    <h1>{Funciona}</h1>
  )
}
export default Combinacion;