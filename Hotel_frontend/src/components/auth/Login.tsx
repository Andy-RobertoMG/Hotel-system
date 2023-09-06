const update = (setUser)=>setUser("Esteban")
import { useState } from 'react';
import "../../css/auth/login.css"
// import logo from '../img/logo1.jpg'
import { Link } from 'react-router-dom/dist';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({funcion,setAuthenticate})=>{
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username:"",
        password:""
    })
    useEffect(()=>{
        // navigate("auth/register");
    },[])
    // const handleLogin = async()=>{
    //     await fetch("http://192.168.56.1:8080/auth/login",
    //     {
    //         method:"POST",
    //         headers:{
    //             "Content-type":"application/json"
    //         },
    //         credentials:"include"
    //     })
    //     return <Navigate to="http://192.168.56.1:8080/rooms"/>
    // }
    // useEffect(()=>{
    //     handleLogin();
        
    // },[])

    // if(user.name!=""&&user.password){
    //     return <Navigate to="/"></Navigate>
    // }
    const handleInput= async(event)=>{
        setUser({...user,
            [event.target.name]:event.target.value
        })
    }
    const handleForm = async(event) =>{
                console.log(event)
                event.preventDefault();
                const login =await fetch("http://192.168.56.1:8080/auth/login",
                    {
                        method:"POST",
                        body:JSON.stringify({
                            "username":"AndyADW",
                            "password":"awdawdawd"
                          }),
                        headers:{
                            "Content-type":"application/json"
                        },
                        credentials:"include"
                    }
                ).then(response => response.json());
                setAuthenticate(login);
                navigate("/rooms")
                console.log("Enviando");
                // const que =await fetch("http://192.168.56.1:8080/auth/logout",
                // {
                //     method:"GET",
                //     headers:{
                //         "Content-type":"application/json"
                //     },
                //     credentials:"include"
                // }
                
                // );
                // console.log("Enviado");
                // return <Navigate to="/"></Navigate>
                // console.log(event.target)
            }
    return (
        <>
        <div className='login_body'>
            <div className='login'>
                <aside className='formulario'>
                    <div>
                        <h3>Login</h3>
                    </div>
                    <form onSubmit={handleForm}>
                    <div>
                        <input id="username" className='loginput' placeholder='Usuario'   type="text" onChange={handleInput} name="username" />
                    </div>
                    <div>
                        <input id="password" className='loginput' placeholder='Contraseña' onChange={handleInput} name="password" type="password"/>
                    </div>
                    <div className='recovery'>
                        <Link className='recovery_text' to="recovery">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div className='input_space'>
                    <input className="buttons_in" type='submit'/>
                        <Link to="/auth/register" className='buttons_in'>Registrar</Link>
                    </div>
                    
                </form>
                </aside>
            </div>
            <main >
                <div className='logo_body'>
                    <img  className="logo" alt='Imagen de logo' ></img>
                </div>
            </main>
        </div>
           
        </>
    )
}
export {Login};