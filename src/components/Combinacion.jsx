import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Combinacion = ()=>{
    return (
      <Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
      </Fragment>  
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