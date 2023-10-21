import {Outlet, Route, Routes} from "react-router-dom";

// import {Login} from './pages/auth/Login';
// import { Register } from './pages/auth/Register';

// import {Combinacion} from './pages/Combinacion';
// import { Reception } from './components/reception/reception';
// import DivTransformable from './components/divtransformable';
// import { Clients } from './components/clients/clients';
// import { Reservation } from './pages/reservation/reservation';
// import './css/maquetacion.css'
// import './App.css'
// import '../src/css/normalization.css'
// import { ProtectedRoute } from './components/security/ProtectedRoute'
import { Suspense, lazy, useEffect, useState } from 'react';
import {loadable} from 'react-lazily/loadable';
// import { useNavigate } from 'react-router-dom';
import React from 'react';
import {Auth} from "./models/index";
import { Login, Register } from "./pages";
// import { Authentication } from './pages/auth/Authentication';
// import { Inicialization } from './pages/auth/inicialization'
// import { Dashboard } from './pages/dashboard/Dashboard'
// import { Login, Register } from "./pages";



// const Login = lazy(async ()=>({default:(((await import('./pages')).Login))}))
// const Register = lazy(async ()=>({default:((await import('./pages')).Register)}))

// const {Login,Register} = loadable(()=>import("./pages"), {
//     fallback: <div>Loading...</div>,
//   });


// const Login = lazy(()=>import('./pages/auth/Login/Login'))
// const Login = lazy(()=>import('./pages/auth/Login/index'))
// const Register = lazy(()=>import('./pages/auth/register/Register'));


const App = ()=>{
    const [authentication,setAuthentication] = useState<Auth>(
        {
            rol:"",
            isAuthenticated:false
        }
    );
    
    return <Routes >
        {/* <Route index element={<Login />}></Route> */}
        {/* <Route path="/auth/" element={<Authentication/>}> */}
            <Route path="/auth/" element={<Outlet/>}>
                <Route path="login" setAuthentication={setAuthentication}element={<Login />}></Route>
                <Route path='register' element={<Register/>}></Route>
            </Route>
            
        {/* </Route> */}
        
    </Routes>
};
export default App;