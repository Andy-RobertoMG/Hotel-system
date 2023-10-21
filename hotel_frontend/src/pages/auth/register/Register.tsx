import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user } from "./models";
import { register } from "./service";


const Register = ()=>{
    const navigate = useNavigate();
    const [user,setUser] = useState<user>({
        email:'',
        lastname:'',
        name:'',
        password:'',
        username:''
    })
    const handleInput= async(event: React.ChangeEvent<HTMLInputElement>)=>{
                setUser({...user,
                    [event.target.name]:event.target.value
                })
                // let a:any=setAuthenticate;
            }
    const handleForm = ()=>{
        register(user).then(()=>{
            setTimeout(()=>{
                navigate('/auth/login')
            },3000);
        })
    }
    return (
        <>
            <div>
                <h3 className='title_auth'>Login</h3>
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
                <input className="buttons_input" type='submit'/>
                    <Link to="/auth/register" className='buttons_link'>Registrar</Link>
                </div>
            </form>
        </>
    );
}
export default Register;