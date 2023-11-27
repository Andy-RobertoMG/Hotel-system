// import { useState } from 'react';
// import "../../css/auth/login.css";
// // import styles from "../../css/auth/login.css";
// // import logo from '../img/logo1.jpg'
// import { Link } from 'react-router-dom/dist';
// import { Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {User_login} from "./user.ts";
// import * as models from "../../../models/index";
// interface ChildComponentProps {
//     setAuthenticate: React.Dispatch<React.SetStateAction<models.Auth>>;
// }
// const Login:React.FC<ChildComponentProps> = ({auth,setAuthenticate})=>{
//     const navigate = useNavigate();
//     const [user,setUser] = useState<User_login>({
//         username:"",
//         password:""
//     })

import { Link, useNavigate } from "react-router-dom";

import { Auth } from "@/models";
import { user } from "./models";
import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import {login} from "@/services";

    
//     const handleInput= async(event)=>{
//         setUser({...user,
//             [event.target.name]:event.target.value
//         })
//         let a:any=setAuthenticate;
//     }
//     const handleForm = async(event:React.FormEvent) =>{
//         event.preventDefault();
//         const login =await fetch("http://192.168.56.1:8080/auth/login",
//             {
//                 method:"POST",
//                 body:JSON.stringify(user),
//                 headers:{
//                     "Content-type":"application/json"
//                 },
//                 credentials:"include"
//             }
//         ).then(response => response.json());
//         console.log(login)
//         setAuthenticate(login);
//         navigate("/dashboard")
//     }
//     return (
//         <>
//             <div>
//                 <h3 className='title_auth'>Login</h3>
//             </div>
//             <form onSubmit={handleForm}>
//                 <div>
//                     <input id="username" className='loginput' placeholder='Usuario'   type="text" onChange={handleInput} name="username" />
//                 </div>
//                 <div>
//                     <input id="password" className='loginput' placeholder='Contraseña' onChange={handleInput} name="password" type="password"/>
//                 </div>
//                 <div className='recovery'>
//                     <Link className='recovery_text' to="recovery">¿Olvidaste tu contraseña?</Link>
//                 </div>
//                 <div className='input_space'>
//                 <input className="buttons_input" type='submit'/>
//                     <Link to="/auth/register" className='buttons_link'>Registrar</Link>
//                 </div>
//             </form>
//         </>
//     )
// }
// export {Login};
type ChildComponentProps = {
    
  };
    
 const Login:React.FC<ChildComponentProps> = ()=>{
    const {setAuth} = useContext(AppContext);
    const navigate = useNavigate();
    const [user,setUser] = useState<user>({
        username:"",
        password:""
    })
    const handleInput= async(event: React.ChangeEvent<HTMLInputElement>)=>{
        setUser({...user,
            [event.target.name]:event.target.value
        })
        // let a:any=setAuthenticate;
    }
    const handleForm = ()=>{
        login().then(({isAuthenticated,rol})=>{
            if(isAuthenticated){
                setAuth({isAuthenticated,rol});
                navigate("/dashboard")
            }
        })
    }
    return <>
        <div>
            <h3 className="title_auth">Login</h3>
        </div>
        <form onSubmit={handleForm}>
            <div>
                <input onChange={handleInput} id="username" name="username" placeholder="Usuario" type="text" className="loginput" />
            </div>
            <div>
                <input onChange={handleInput} id="password" name="password" placeholder="Contraseña" type="password" className="loginput" />
            </div>
            <div>
                <Link className='recovery_text' to="recovery">¿Olvidaste tu contraseña?</Link>
            </div>    
            <div className='input_space'>
                 <input className="buttons_input" type='submit'/>
                 <Link to="/auth/register" className='buttons_link'>Registrar</Link>
            </div>
        </form>
    </>
}
export default Login;