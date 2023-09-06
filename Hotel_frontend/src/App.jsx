import {Routes,Route} from 'react-router-dom'
import {Login} from './components/auth/Login'
import { Register } from './components/auth/Register'
import {Combinacion} from './components/Combinacion'
import { Reception } from './components/reception/reception'
import { Rooms } from './components/rooms/rooms'
import DivTransformable from './components/divtransformable'
import { Clients } from './components/clients/clients'
import { Reservation } from './components/reservation/reservation'
import './css/maquetacion.css'
import './App.css'
import '../src/css/normalization.css'
import { ProtectedRoute } from './components/security/ProtectedRoute'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
function App() {
  const [user, setUser] = useState(null);
  const [authenticate, setAuthenticate ] = useState(null);
  const navegate = useNavigate();
  const check_Rol =(listRolAccepted,rol)=>{
    // console.log(listRolAccepted)
    // console.log(rol)
    // console.log(listRolAccepted.includes(rol));
    return listRolAccepted.includes(rol);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.56.1:8080/auth/autologin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          // body: JSON.stringify({
          //   "username": "testeoadawdasd",
          //   "password": "padasad",
          //   "email": "andymesta421@gmail.com",
          //   "phone_number": 13123213
          // }),
          credentials: "include"
        });
        // console.log("pasa por aca")
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404, 500, etc.) here
          // console.log(`HTTP Error: ${response.status}`);
          const userData = await response.json();
          console.log(userData)
          return;
        }
        const authentication = await response.json();
        console.log(authentication)
        setAuthenticate(authentication)
        navegate("/reservation")
        // console.log(userData)
        // setUser(userData);
      } catch (error) {
        console.log("An error occurred while fetching data:"+ error);
      }
    };

    fetchData();
  }, []);
    return (
    <>
      <Routes>
        <Route index element={<Login setAuthenticate={setAuthenticate}/>}>

        </Route>
        <Route path="/auth/" >
          <Route path="login" element={<Login isAllowed={check_Rol(["Nuevo"],authenticate?.rol)} setAuthenticate={authenticate}/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
        <Route element={<ProtectedRoute isAllowed={check_Rol(["Nuevo"],authenticate?.rol)} authenticate ={authenticate}/>}>
          <Route path='/' element={<Combinacion/>}>
            <Route path='dashboard' ></Route>
            <Route path='client' element={<Clients/>}></Route>
            <Route path="rooms" element={<ProtectedRoute isAllowed={check_Rol(["Nuevos"],authenticate?.rol)} authenticate ={authenticate} redirectTo='/reservation'></ProtectedRoute>}>
              {/* <Route path='rooms' element={<Rooms/>}></Route> */}
            </Route>
            <Route path='reception' element={<Reception/>}></Route>
            <Route path='reservation' element={<Reservation/>}></Route>
          </Route>
          <Route path='/a' element={<DivTransformable/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
