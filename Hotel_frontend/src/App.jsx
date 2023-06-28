import { useState } from 'react'
import React,{Fragment} from 'react'
import Combinacion from './components/Combinacion'
import Fechas from './components/Fechas'
// import Hello from "./components/Users"
import Login from './components/Login'
import{
  Routes,
  Route,
  createBrowserRouter,
  Link,
} from "react-router-dom"

// const ruta = createBrowserRouter([
//   {
//     path:"/",
//     element:<Header/>
//   }
// ])
const Hola =()=>{
  return ( <h1>Que pasa eqeq</h1>)
}


function App() {

  return (
    <>
        
        <Routes>
          <Route path='/' element={<Combinacion/>}>
          
          </Route>
          <Route path='login' element={<Login/>}></Route>
          {/* <Route path='user' element={<Hello/>}></Route>   */}
           <Route path="el"element={<div>
            <details>
            <summary>Da Click Para Abrir</summary>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </details>
           </div>}>

           </Route>
        </Routes>
      </>
  )
}

export default App
{/* <Switch>
          <Route path='/contacto'>
              <h1>Siguiente</h1>
          </Route>
        </Switch> */}