// import { useState } from 'react';
// import { handleInputChange } from './input';
// import Login from './Login';
// const handleInputChange = (event,setValue) =>{
//     const {name,value} = event.target;
//     setValue({
//         ...values,
//         [name]:value
//     })
// const Hello  =()=>{

//     const [values, setValue] = useState({
//         name:"",
//         phone:"",
//         email:"",
//         address:""
//     })
//     const [ quepedo, quepe] = useState("hola")
//     const extrano = (info)=>{
//         quepe(info);
        
//     }
    
// }
//     const handleForm = async(event) =>{
//         event.preventDefault();
//         console.log("Enviando");
//         const que =await fetch("http://localhost:4000/",
//         {
//             method:"PUT",
//             body:JSON.stringify(values),
//             headers:{
//                 "Content-type":"application/json"
//             }
//         }
        
//         );
//         console.log("Enviado");
//     }
    
//     return (
//     <>
//         <form onSubmit={handleForm}>
//             <div>
//             <label htmlFor="fname">Nombre:</label>
//             <input placeholder="Ingrese su nombre" id="fname" value={values.name}type="text" name="name" onChange={handleInputChange}/>
//             </div>
//             <div>
//                 <label htmlFor="telefono">Telefono:</label>
//                 <input placeholder="Ingrese su telefono" id='telefono' value={values.phone}type="text" name="phone" onChange={handleInputChange}/>
//             </div>
//             <div>
//                 <label htmlFor="email">Correo:</label>
//                 <input placeholder="Ingrese su correo" id="email" value={values.email}type="text" name="email" onChange={handleInputChange}/>
//             </div>
//             <div>
//                 <label htmlFor="address">Dirección:</label>
//                 <input placeholder="Ingrese su address" id="address" value={values.address} type="text" name="address" onChange={handleInputChange}/>
//             </div>
//             <input type="submit" value="Save"/>
//         </form>
//          {/* <Login funcion ={extrano}/> */}
//          <h1>Prueba:{quepedo}</h1>
//     </>)
    
// }
// export default Hello;