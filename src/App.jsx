import { useState } from 'react'
import React,{Fragment} from 'react'
import Combinacion from './components/Combinacion'
import Fechas from './components/Fechas'
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
  return ( <h1>Que pasa</h1>)
}


function App() {

  return (
    <Fragment>
        <Hola/>
        <Routes>
          
          <Route path='/' element={<Combinacion/>}>
            <Route path='comida' element={<h1>Esta es la lista de comida</h1>}></Route>
            <Route path='about' element={<h1>Nosotros somos una compañia</h1>}></Route>
          </Route>
          <Route path='/desastre' element={<div>
            <h1>Hola que haces</h1>
            <Fechas/>
            <Link to="comida">Link a comida</Link>
          </div>}>
            <Route path='comida' element={<h1>Esta es la lista de comida</h1>}></Route>
            <Route path='about' element={<h1>Nosotros somos una compañia</h1>}></Route>
          </Route>
        </Routes>
      </Fragment>
  )
}

export default App
{/* <Switch>
          <Route path='/contacto'>
              <h1>Siguiente</h1>
          </Route>
        </Switch> */}