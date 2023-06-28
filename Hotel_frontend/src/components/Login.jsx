const update = (setUser)=>setUser("Esteban")
import { useState } from 'react';
import "../css/login.css"

const Login = ({funcion})=>{
    const [user,setUser] = useState({
        name:"",
        password:""
    })
    
    const handleForm = async(event) =>{
                event.preventDefault();
                console.log("Enviando");
                const que =await fetch("http://localhost:4000/login",
                {
                    method:"PUT",
                    body:JSON.stringify(values),
                    headers:{
                        "Content-type":"application/json"
                    }
                }
                
                );
                console.log("Enviado");
            }
    return (
        <>
            <main>
                <div>
                    <form onSubmit={handleForm}>
                    <h3>
                    Login ddd
                    </h3>
                    <div>
                        <label htmlFor="user">Usuario:</label>
                        <input id="user"    type="text" name="user_name" />
                    </div>
                    <div>
                        <label htmlFor='number_phone'>Numero</label>
                        <input id="number_phone" type="number" name="pass"/>
                    </div>
                    
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input id="password" name="password" type="password"/>
                    </div>
                    
                    <div>
                    <button >Actualizar el usuario</button>
                        
                    </div>
                    <h2>{user.name}</h2>
                </form>
                </div>
            </main>
        </>
    )
}
const Register =()=>{
    const [user,setUser] = useState({
        name:"",
        password:""
    })
    
    const handleForm = async(event) =>{
                event.preventDefault();
                console.log("Enviando");
                const que =await fetch("http://localhost:4000/login",
                {
                    method:"PUT",
                    body:JSON.stringify(values),
                    headers:{
                        "Content-type":"application/json"
                    }
                }
                
                );
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
                    <label htmlFor="user">Usuario:</label>
                    <input id="user"    type="text" name="name" />
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input id="password" name="password" type="password"/>
                    </div>
                    
                    <div>
                    <button >Actualizar el usuario</button>
                        
                    </div>
                    <h2>{user.name}</h2>
                </form>
                </div>
            </main>
        </>
    )
}
export default Login;