import {Routes,Route} from 'react-router-dom'
import {Login,Register} from './components/Login'
import {Combinacion} from './components/Combinacion'
import { Reception } from './components/reception/reception'
import { Rooms } from './components/rooms/rooms'
import DivTransformable from './components/divtransformable'
import { Clients } from './components/clients/clients'
import { Reservation } from './components/reservation/reservation'
import './css/maquetacion.css'
import './App.css'
import '../src/css/normalization.css'
function App() {
    return (
    <>
      <Routes>
        <Route path="/auth/" >
          <Route path="login" element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
        </Route>
        <Route path='/' element={<Combinacion/>}>
          <Route path='dashboard' ></Route>
          <Route path='client' element={<Clients/>}></Route>
          <Route path='rooms' element={<Rooms/>}></Route>
          <Route path='reception' element={<Reception/>}></Route>
          <Route path='reservation' element={<Reservation/>}></Route>
        </Route>
        <Route path='/a' element={<DivTransformable/>}>

        </Route>
      </Routes>
    </>
  )
}

export default App
