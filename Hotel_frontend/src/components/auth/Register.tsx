import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import * as yup from "yup"
export const Register =()=>{
    const [user,setUser] = useState({
        username:"",
        password:"",
        phone_number:0,
        email:''
    })
    const handleInput = (event)=>{
        setUser({...user,
            [event.target.name]:event.target.value
        })

    }
    const validation = yup.object().shape({
        username:yup.string().required("El nombre de usuario es necesario"),
        password:yup.string().min(5,"D"),
        email: yup.string().required().email(),
        phone_number: yup.number().positive()
    });

    const handleForm = async(event) =>{
        event.preventDefault();
        setUser({username:"AndyADW",password:"awdawdawd",email:"andyroberto49@gmail.com",phone_number:122133});
        // await validation.validate(user,{abortEarly:false});
        try{
            const resultado = await fetch("http://192.168.56.1:8080/auth/register",
            {
                method:"POST",
                body:JSON.stringify(user),
                credentials:"include",
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
                        <input id="user" onChange={handleInput} placeholder='Usuario' className='loginput'   type="text" name="username" />
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
                </form>
                </div>
            </main>
        </>
    )
}
