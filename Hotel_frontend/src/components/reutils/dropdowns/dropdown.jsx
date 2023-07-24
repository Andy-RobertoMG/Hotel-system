import {motion} from "framer-motion"
// import moduleName from 'useState';
import "../../../css/dropdown.css"
import { useState,useRef } from 'react';
import { AnimatePresence } from "framer-motion";
  import { useEffect } from "react";
import {BiRadioCircle} from 'react-icons/bi'

const DropDown = ({items=null,check=null})=>{
  const [selectedItems, setSelectedItems] = useState({});
  const [clicked,setClicked] = useState(false);
  const [pruebas,setPruebas] = useState({});//Los items seleccionasdos se mantendran en secundary cuando un item sea seleccionado
  const [items_selected,setSelected] = useState({});//Cuando se cierra el dropdown se guarda aqui los elementos
  const [items_default,setDefault] = useState({});//
  const [showAnimation, setShowAnimation] = useState(false);
  const [hover_text,sethover_text] = useState(true)
  const ref = useRef(null);
  const quitar = ()=>{

  }
  const arrow_button =()=>{
    setShowAnimation(!showAnimation)
    if(Object.keys(selectedItems).length>0)
    {
      // setSelected({...items_selected,...})
    }
    // setShowAnimation(!showAnimation);
    // if( Object.keys(pruebas).length>0){
    //   setSelected({...items_selected,...pruebas})
    //   let aux_default = items_default;
    //   Object.keys(pruebas).forEach((llave)=>{
    //     delete aux_default[llave];
    //   })
    //   setPruebas({});
    //   setDefault(aux_default);
    // }
  }
  useEffect(()=>{
    let length = Object.keys(items_selected).length;
    let auxiliar_object = {};
    // if(length){

    // }
    // else{
    //   setDefault({})
    // }
  },[])
  useEffect(()=>{
    console.log(items_default)
  },[items_default])
  const seleccionando = (e) => {
    e.preventDefault();
    let itemId = e.target.id;
    const isSelected = selectedItems[itemId];
    if (isSelected) {
      const updatedItems = { ...selectedItems };
      delete updatedItems[itemId];
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems({ ...selectedItems, [itemId]: true });
    }
  }
  return <>
    <div className="text">
      <div className="selector_">
        <input  className="input_" placeholder="Hola como "/>
          <i onClick={arrow_button}  className={`texto arrow ph-bold ph-caret-up `}></i>
      </div>
      <AnimatePresence>
        {showAnimation&&(
        
        <motion.ul initial={{opacity:0,y:-50}}  animate={{opacity:1, y:0}} exit={{opacity:0,height:0}}className="dropdown_ul">
          {
            Object.keys(items_selected).length>0&&
              Object.keys(items_selected).map((id)=>(

              <li  onClick={seleccionando} value={"texto"} key={id} className="dropdown_li ">
                  <a id={id}>
                    <motion.span onClick={quitar}  id={id}>
                      {items_selected[id].Nombre} 
                    </motion.span>
                    <div className="circulo_padre">
                      <div className={`circulo ${selectedItems[id]? "red":""}`}></div>
                    </div>
                  </a>
              </li> 
              ))
          }
          {
           
              items_default&&
              Object.keys(items_default).map((id)=>(

              <li onClick={seleccionando}  value={"texto"} key={id} className="dropdown_li">
                  <a  >
                    <motion.span  id={id} >
                      {items_default[id].Nombre}
                      
                    </motion.span>
                    <div onClick={seleccionando} id={id} className="circulo_padre">
                      <div  id={id }className={`circulo ${selectedItems[id]? "red":""}`} style={{ pointerEvents: "none" }}></div>
                    </div>
                  </a>
              </li> 
              ))
          }
        </motion.ul>
        )}
      </AnimatePresence>
    </div>
  </>
}
export{
  DropDown
}