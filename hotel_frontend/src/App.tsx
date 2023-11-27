import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

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
import { Suspense, lazy, useContext, useEffect, useState } from 'react';
import { loadable } from 'react-lazily/loadable';
// import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Auth } from "./models/index";
import { Login, Register } from "./pages";
import { ProtectedRoute } from "./components";
import StateApp from "./context/StateApp";
import { AppContext } from "./context/AppContext";
import { login } from "@/services";


const App = () => {
    const navigate = useNavigate();
    const {setAuth } = useContext(AppContext);
    useEffect(() => {
        login().then(({ isAuthenticated, rol }) => {
            if (isAuthenticated) {
                setAuth({ isAuthenticated, rol });
                navigate("/dashboard")
            }
        })
    }, []);
    return <StateApp>
        <Routes >
            <Route path="/auth/" element={<Outlet />}>
                <Route path="login" element={<Login />}></Route>
                <Route path='register' element={<Register />}></Route>
            </Route>
            <Route element={<ProtectedRoute ></ProtectedRoute>}>
                <Route path="/" element={<Outlet />}>
                    <Route path="dashboard"></Route>
                    <Route path="client"></Route>
                </Route>
            </Route>
        </Routes>
    </StateApp>;
};
export default App;