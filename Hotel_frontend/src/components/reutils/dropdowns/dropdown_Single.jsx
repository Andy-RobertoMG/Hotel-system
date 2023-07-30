import {motion} from "framer-motion"
// import moduleName from 'useState';
import "../../../css/dropdown.css"
import { useState,useRef,useMemo } from 'react';
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {BiRadioCircle} from 'react-icons/bi'
/**
 * Este dropdown es para solo escoger un elemento
 */
const DropDown_SO = ({dato_choosen=null,name='',handle_update=null,items=[],check=null})=>{
  /**
   * Prop
   */
  const [items_selected,setItems_Selected] = useState([]);
  const [items_state,setItems_State] = useState({});
  const [items_Not_Selected, setNotSelected] = useState([])
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(()=>{
    if(items.length>0){
      setNotSelected(items);
      setItems_State({[dato_choosen]:true});
      console.log(dato_choosen)
      // if()
      // const {id} = dato_choosen;
      // setItems_State({id:true})
      
    } 
  },[])
  useEffect(()=>{
    if(items_state){
      const objeto = {target:{name:name,value:Object.keys(items_state)[0]}};
      handle_update(objeto);
    }
  },[items_state])
  const items_NotSelected_Sort = useMemo(()=>{
    const sortedArray = items_Not_Selected.sort((a,b)=>{
      return a.title.localeCompare(b.title);
    })
    console.log(sortedArray)
    return sortedArray;
  },[items_Not_Selected])
  const items_Selected_Sort =  useMemo(()=>{
    const sortedArray = items_selected.sort((a,b)=>{
      return a.title.localeCompare(b.title);
    })
    console.log(sortedArray)
    return sortedArray;
  },[items_Not_Selected])
  const arrow_button = ()=>{
    console.log(items_state)
    if(showAnimation||!showAnimation){
      let aux_Selected=[];
      let aux_NotSelected=[];
      items.forEach(item=>{
        // console.log(item);
        if(items_state[item.id]==true){
          aux_Selected=[...aux_Selected,item]
        }
        else{
          aux_NotSelected=[...aux_NotSelected,item]
        }
      })
      setItems_Selected(aux_Selected);
      setNotSelected(aux_NotSelected);
    }
    setShowAnimation(!showAnimation)
    
  }

  useEffect(()=>{
    console.log(items_state)
    console.log(items_selected)
    console.log(items_Not_Selected);
  },[items_state])
  const OnSelect = (e)=>{
    if(e.target.id)
    {
      setItems_State({[e.target.id]:true})
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
              items_Selected_Sort&&
              items_Selected_Sort.map((object)=>(

              <li onClick={OnSelect} data-value={"nuevo"} key={object.id} className="dropdown_li">
                  <a  >
                    <motion.span  id={object.id} >
                      {object.title}
                      
                    </motion.span>
                    <div  id={object.id} className="circulo_padre">
                      <div  id={object.id }className={`circulo ${items_state[object.id]? "red":""}`} style={{ pointerEvents: "none" }}></div>
                    </div>
                  </a>
              </li> 
              ))
          }
          {
           
              items_NotSelected_Sort&&
              items_NotSelected_Sort.map((object)=>(

              <li onClick={OnSelect} data-value={"nuevo"} key={object.id} className="dropdown_li">
                  <a  >
                    <motion.span  id={object.id} >
                      {object.title}
                      
                    </motion.span>
                    <div  id={object.id} className="circulo_padre">
                      <div  id={object.id }className={`circulo ${items_state[object.id]? "red":""}`} style={{ pointerEvents: "none" }}></div>
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
  DropDown_SO
}