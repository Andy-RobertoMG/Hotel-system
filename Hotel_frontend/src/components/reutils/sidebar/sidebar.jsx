
import { Link } from "react-router-dom/dist"
import "../../../css/sidebar.css"
import {Menu} from './data';
import { useEffect } from "react"
import { useState,useRef,useId} from "react"
import {motion} from 'framer-motion'
import { FaBars } from 'react-icons/fa';
// import {uuid} from "uuid"
// import  from "uuid"
import { v4 as uuidv4 } from 'uuid';
import { delay } from "framer-motion";

const SubMenuItem = ({collapse=null,to=null, text, subMenuItems=null,idActual=null,setIdActual=null}) => {
  
  const [idActual_sub,setIdActual_sub] = useState("");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [click,setClick] = useState(false);
  const subMenuRef = useRef(null);
  const [intermedio,setintermedio] = useState(.5);
  const id = useId();
  
  const ulVariants = {
    hidden: {
      height: 0,
      padding:0,
      margin:0,
      overflow:"hidden",
      // display:"none",
      opacity: 0,
      inherit:false
    },
    visible: {
      inherit: false,
      "margin-left":"1.5rem",
      "padding-left":".5rem",
      overflow:"hidden",

      display:"normal",

      height: "auto",
      opacity: 1,
    }, 
    hidden_c: {
      inherit: false,
      position:"absolute",
      // "padding-top":".5rem",
      // "padding-bottom":".5rem",
      color:"rgb(255, 0, 0)",
      // "padding-left":".5rem",
      // "padding-right":".5rem",
      top:0,
      height:0,
      left:"4.5rem",
      overflow:"hidden",
      display:"none",
      width:"auto",
      height:"0",
      "background-color":"#222222",
      opacity: 0,
    },
    visible_c: {
      inherit: false,
      position:"absolute",
      left:"4.5rem",color:"#232132",
      display:"",
      overflow:"visible",
      width:"10rem",
      height:"auto",
      "background-color":"#222222",
      opacity: 1,
      "z-index":0
    }

  };

  useEffect(()=>{
    setShowSubMenu(false);
  },[collapse])
  useEffect(()=>{
    if(id==idActual)
      {
        // console.log(id);
        setShowSubMenu(true);
      }
    if(id!=idActual){
      setShowSubMenu(false)
    }
    
  },[idActual])

  const toggleSubMenu = (e) => {
    e.preventDefault();
    if(id==idActual){
      setShowSubMenu(!showSubMenu);
    }else{
      setIdActual(id);
    }
  };

  return (
    <li onClick={toggleSubMenu}>
      <a href="#"  >
        <motion.i
          initial={{fontSize:'1rem'}}
          className={`icon ph-bold ph-house-simple`}
        >

        </motion.i>
        <span
        className="text"
      >
        {text}
      </span>

        {subMenuItems&&(
          <i  className={`arrow ph-bold ${(showSubMenu) ? "ph-caret-up" : "ph-caret-down"}`}></i>
        )}
      </a>
      {
        subMenuItems&& (
          <motion.ul 
                initial={collapse ? "hidden_c" : "hidden"}
  className={collapse ? 'variable' : 'submenu'}
  variants={ulVariants}
  animate={
    showSubMenu
      ? (collapse ? "visible_c" : "visible")
      : (collapse ? "hidden_c" : "hidden")
  }
                transition={{ duration: .3 }}
              >
          {subMenuItems.map((item) => (
              <li   key={item.id}>
                <Link value="texto" to={`${item.data}`}>
                  <span className="text">{item.data}</span>
                  
                 </Link>
              </li>
            ))}
            
          </motion.ul>
        )
      }
    </li>
  );
};
const Sidebar = ({collapse,modify_collapse})=>{
  const [idActual,setIdActual] = useState("");
  const [box_toggle,setBox_toggle] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(()=>{
    // Deshabilitar el botón
    setButtonDisabled(true);

    // Establecer el tiempo de retraso en milisegundos (ejemplo: 2000ms = 2 segundos)
    const delay = 300;

    // Habilitar el botón después del retraso
    setTimeout(() => {
      setButtonDisabled(false);
    }, delay);
  },[collapse])
  const cajaPadreRef = useRef(null);
  const cajaHijaRef = useRef(null);
  return (
    <>
      <aside ref={cajaPadreRef} className={`sidebar`} >
        <div className="father">
          <button disabled={isButtonDisabled} ref={cajaHijaRef}  onClick={modify_collapse }className={`box_toggle`}>
            <FaBars className={`box_toggle`}/>
          </button>
        </div>
        {/* <div className="head">
          <div className="user-img">
            <img alt="imgen"></img>
          </div>
          <div className="user-details">
            <p className="title">titulo</p>
            <p className="name">web</p>
          </div>
        </div> */}
        <div className="nav">
          <div className="menu">
            <p className="title">
              Principal
            </p>
            <ul className="test_1">
              <SubMenuItem  text="Dashboard"  />
              <SubMenuItem  text="Reserva "  />
              <SubMenuItem  text="Recepción"  />
              <SubMenuItem  text="Punto de Venta"  />
              <SubMenuItem  text="Verificación de Salidas"  />
              <SubMenuItem  text="Reportes"  />
              <SubMenuItem to={'client'} text="Clientes"  />
              <SubMenuItem  text="Reserva"  />
              <SubMenuItem {...{collapse,idActual,setIdActual}} text="Hola" subMenuItems={Menu}/>
              <SubMenuItem {...{collapse,idActual,setIdActual}} text="Hola" subMenuItems={Menu}/>
              <SubMenuItem  text="Dashboard"  />
            </ul>
          </div>
        </div>
        <div className="menu">
          <p className="title">Account</p>
          <ul>
            <li>
              <a href="http://">
                <i className="icon ph-bold ph-gear"></i>
                <span className="text">Settings</span>
              </a>
            </li>
          </ul>
        </div>

      </aside>
    </>
  )
}


{/* <Link ><h3>rae</h3></Link>
        <Link>Recepción</Link>
        <Link>Punto de Venta</Link>
        <Link>Verificación de Salidas</Link>
        <Link>Reportes</Link>
        <Link>Clientes</Link>
        <Link>Usuarios</Link>
        <Link>Configuración</Link>
        <button className="buttons_in" onClick={prueba_}>Click</button> */}
export default Sidebar;
// import { Link } from "react-router-dom/dist"
// import "../../../css/sidebar.css"
// import {Menu} from './data';
// import { useEffect } from "react"
// import { useState,useRef,useId} from "react"
// import {motion} from 'framer-motion'
// // import {uuid} from "uuid"
// // import  from "uuid"
// import { v4 as uuidv4 } from 'uuid';
// import { delay } from "framer-motion";
// const SubMenuItem = ({collapse=null, text, subMenuItems=null,idActual=null,setIdActual=null}) => {
//   const [idActual_sub,setIdActual_sub] = useState("");
//   const [showSubMenu, setShowSubMenu] = useState(false);
//   const [click,setClick] = useState(false);
//   const subMenuRef = useRef(null);
//   const id = useId();
  
//   useEffect(()=>{
//     if(id==idActual)
//       {
//         // console.log(id);
//         setShowSubMenu(true);
//       }
//     if(id!=idActual){
//       setShowSubMenu(false)
//     }
    
//   },[idActual])

//   useEffect(() => {
//     if (subMenuRef.current) {
//       if(!collapse){
//         subMenuRef.current.style.height = showSubMenu ? `${subMenuRef.current.scrollHeight}px` : "0";
//       }
//     }
//   }, [showSubMenu]);
//   useEffect(()=>{
//     // setShowSubMenu(false);
//     if(collapse){
//       console.log("hola");
//         if(subMenuRef.current){
//         subMenuRef.current.style.height = "200px";
//       }
//     }
    
//   },[collapse])
//   const toggleSubMenu = () => {
//     if(id==idActual){
//       setShowSubMenu(!showSubMenu);
//     }else{
//       setIdActual(id);
//     }
//   };

//   return (
//     <li>
//       <a href="#"  >
//         <motion.i
//           initial={{fontSize:'1rem'}}
//           // whileHover={{fontSize:``}}
//           // animate={{onH}}
//           className={`icon ph-bold ph-house-simple`}
//         >

//         </motion.i>
//         <span className="text">{text}</span>
//         {subMenuItems&&(
//           <i onClick={toggleSubMenu} className={`arrow ph-bold ${(showSubMenu) ? "ph-caret-up" : "ph-caret-down"}`}></i>
//         )}
//       </a>
//       {
//         subMenuItems&& (
//             <ul ref={(!collapse)?subMenuRef:null} className={(!collapse)?`sub-menu ${(showSubMenu) ? "unhidden" : ""}`:"fixed"}>
//             {subMenuItems.map((item) => (
//               <li  key={item.id}>
//                 <a href="#">
//                   <span className="text">{item.data}</span>
                  
//                 </a>
//               </li>
//             ))}
            
//           </ul>
//         )
//       }
//     </li>
//   );
// };
// const Sidebar = ({collapse,modify_collapse})=>{
//   const [idActual,setIdActual] = useState("");
//   const [box_toggle,setBox_toggle] = useState(false);
//   const [isButtonDisabled, setButtonDisabled] = useState(false);

//   useEffect(()=>{
//     // Deshabilitar el botón
//     setButtonDisabled(true);

//     // Establecer el tiempo de retraso en milisegundos (ejemplo: 2000ms = 2 segundos)
//     const delay = 300;

//     // Habilitar el botón después del retraso
//     setTimeout(() => {
//       setButtonDisabled(false);
//     }, delay);
//   },[collapse])
//   const cajaPadreRef = useRef(null);
//   const cajaHijaRef = useRef(null);
//   return (
//     <>
//       <aside ref={cajaPadreRef} className={`sidebar`} >
//         <div className="father">
//           <button disabled={isButtonDisabled} ref={cajaHijaRef}  onClick={modify_collapse }className={`box_toggle`}><p>
//             Caja
//             </p></button>
//         </div>
//         <div className="head">
//           <div className="user-img">
//             <img alt="imgen"></img>
//           </div>
//           <div className="user-details">
//             <p className="title">titulo</p>
//             <p className="name">web</p>
//           </div>
//         </div>
//         <div className="nav">
//           <div className="menu">
//             <p className="title">
//               Principal
//             </p>
//             <ul className="test_1">
//               <SubMenuItem  text="Dashboard de reconocimiento"  />
//               <SubMenuItem {...{collapse,idActual,setIdActual}} text="Hola mama" subMenuItems={Menu}/>
//               {/* <SubMenuItem {...{idActual,setIdActual}} text="Hola mama" subMenuItems={Menu}/> */}
//               {/* <SubMenuItem {...{idActual,setIdActual}} text="Hola mama" subMenuItems={Menu}/> */}
//               {/* <SubMenuItem text="Hola papa"/> */}
//               {/* <li className="active">
//                 <a href="" >
//                   <i className="icon ph-bold ph-house-simple"></i>
//                   <span className="text">Dashboard de reconocimiento</span>
//                 </a>
//               </li>
//               <li>
//                 <Link href="#" >
//                   <i className="icon ph-bold ph-house-simple"></i>
//                   <span className="text">Dashboard 2</span>
//                   <i onClick={toggleSubMenu} className={`arrow ph-bold ${showSubMenu ? "ph-caret-up" : "ph-caret-down"}`}></i>
//                 </Link>
//                 <ul ref={subMenuRef} className={`sub-menu ${showSubMenu?"unhidden":""}`}>
//                   <li>
//                     <a href="#">
//                       <span className="text">Users</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <span className="text">Responsive</span>
//                     </a>
//                   </li>
//                 </ul>
//               </li> */}

//               {/* <li className="active">
//                 <a href="" >
//                   <i className="icon ph-bold ph-house-simple"></i>
//                   <span className="text">Dashboard de reconocimiento</span>
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//         <div className="menu">
//           <p className="title">Account</p>
//           <ul>
//             <li>
//               <a href="http://">
//                 <i className="icon ph-bold ph-gear"></i>
//                 <span className="text">Settings</span>
//               </a>
//             </li>
//           </ul>
//         </div>

//       </aside>
//     </>
//   )
// }


// {/* <Link ><h3>rae</h3></Link>
//         <Link>Recepción</Link>
//         <Link>Punto de Venta</Link>
//         <Link>Verificación de Salidas</Link>
//         <Link>Reportes</Link>
//         <Link>Clientes</Link>
//         <Link>Usuarios</Link>
//         <Link>Configuración</Link>
//         <button className="buttons_in" onClick={prueba_}>Click</button> */}
// export default Sidebar;