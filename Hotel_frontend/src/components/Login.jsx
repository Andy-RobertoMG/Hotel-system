const update = (setUser)=>setUser("Esteban")
import { useState } from 'react';
import "../css/login.css"
import logo from '../img/logo1.jpg'
import { Link } from 'react-router-dom/dist';
import { Navigate } from 'react-router-dom';

const Login = ({funcion})=>{
    const [user,setUser] = useState({
        name:"",
        password:""
    })
    if(user.name!=""&&user.password){
        return <Navigate to="/"></Navigate>
    }
    const handleInput= async(event)=>{
        setUser({...user,
            [event.target.name]:event.target.value
        })
    }
    const handleForm = async(event) =>{
                event.preventDefault();

                // console.log("Enviando");
                // const que =await fetch("http://localhost:3000/login",
                // {
                //     method:"PUT",
                //     body:JSON.stringify(values),
                //     headers:{
                //         "Content-type":"application/json"
                //     }
                // }
                
                // );
                // console.log("Enviado");
                return <Navigate to="/"></Navigate>
                console.log(event.target)
            }
    return (
        <>
            <main>
            <div className='login'>
                <aside className='formulario'>
                    <div>
                        <h3>Login</h3>
                    </div>
                    <form onSubmit={handleForm}>
                    <div>
                        <input id="user" className='loginput' placeholder='Usuario'   type="text" onChange={handleInput} name="name" />
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
            <div className='imagen'>
                <img  className="logo" alt='Imagen de logo' src={logo}></img>
            </div>
            </main>
           
        </>
    )
}
const Register =()=>{
    const [user,setUser] = useState({
        name:"",
        password:"",
        repeat_pw:"",
        email:''
    })
    const handleInput = (event)=>{
        setUser({...user,
            [event.target.name]:event.target.value
        })

    }
    const handleForm = async(event) =>{
                event.preventDefault();
                //console.log("Enviando");
                try{
                    
                    const resultado = await fetch("http://localhost:4000/auth/register",
                    {
                        method:"PUT",
                        body:JSON.stringify(user),
                        headers:{
                            "Content-type":"application/json"
                        }
                    }).then(response => response.json())
                    // console.log(resultado.body);
                    console.log(resultado);
                    
                }catch(err){
                    console.log(err)
                    console.log("Hubo un error")
                }
                
                
                
                console.log("Enviado");
            }
    return (
        <>
            <main>
                <div>
                    <form onSubmit={handleForm}>
                    <p>
                    Register
                    </p>
                    <div>
                        <input id="user" onChange={handleInput} placeholder='Usuario' className='loginput'   type="text" name="name" />
                    </div>
                    <div>
                        <input id="email" placeholder='Email' onChange={handleInput} className='loginput' name="email" type="email"/>
                    </div>
                    <div>
                        <input id="password" placeholder='Contraseña' className='loginput' onChange={handleInput} name="password" type="password"/>
                    </div>
                    <div>
                        <input id="password_2" placeholder='Repetir Contraseña' className='loginput' onChange={handleInput} name="repeat_pw" type="password"/> </div>
                    <div>
                    <div className='input_space'>
                        <input className="buttons_in" type='submit'/>
                        <Link to="/auth/login" className='buttons_in'>¿Ya tienes cuenta?</Link>
                    </div>
                        
                    </div>
                    <h2>{user.name}</h2>
                </form>
                </div>
            </main>
        </>
    )
}
export {Login,Register};