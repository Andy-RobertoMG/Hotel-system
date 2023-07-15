import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import {Login,Register} from './components/Login'
import {Combinacion} from './components/Combinacion'

import './App.css'
import { Reception } from './components/reception/reception'
import { Rooms } from './components/rooms/rooms'
import DivTransformable from './components/divtransformable'
import './css/maquetacion.css'
const Test = () => <h1 >Home</h1>
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/auth/" >
          <Route path="login" element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
        <Route path='/' element={<Combinacion/>}>
          <Route path='dashboard' >

          </Route>
          <Route path='reception' element={<Reception/>}>
          <Route path='rooms' element={<Rooms/>}>

          </Route>
          </Route>
        </Route>
        <Route path='/a' element={<DivTransformable/>}>

        </Route>
      </Routes>
    </>
  )

}

export default App
