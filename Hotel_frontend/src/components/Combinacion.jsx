import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import Sidebar from "./reutils/sidebar/sidebar";
import Tabla from "./reutils/table/table";
import {motion} from 'framer-motion'


import DivTransformable from "./divtransformable";
import { DropDown } from "./reutils/dropdowns/dropdown";
// import { motion } from 'frame-motion';
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
    const [collapse, setCollapse] = useState(false)
    const modify_collapse= ()=>{
      setCollapse(!collapse);
    }
    return (
      
        <div 
          className={`maquetacion ${collapse?"toggle":""}`}
          // initial={false}
          // animate={{gridTemplateColumns:(!collapse)?"17rem auto":"6rem auto"}} 
          
          // transition={{type:"spring",duration:.5}}
        >
          <div className="sidebar_main">
            <Sidebar collapse={collapse} modify_collapse={modify_collapse}></Sidebar>
          </div>
          {/* <div className="sidebar">
            
          </div> */}
          <div className="main_">
            <Outlet/>
          </div>
          {/* <div className="principal">
              <Tabla/>
              <DropDown check={{id:"23",id:"24"}} items={{213:{Nombre:"Andy asdas Roberto",Apellido:"Mesta"},1233:{Nombre:"Cristian",Apellido:"Gonzalez"}}}/>
          </div> */}

        </div>
        
        
    )
}

const Fechas=()=>{
  fecha = [new Date("2023/1/5")];
  console.log(fecha[0]);
  return (
    <h1>{Funciona}</h1>
  )
}
export {Combinacion};