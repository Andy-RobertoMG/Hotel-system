import  { ReactNode, useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as authentication from './index';
import { Auth } from '../../../models';
import { AppContext } from '@/context/AppContext';

interface AuthProps {
    children?: ReactNode;
  }
//export const ProtectedRoute =({isAllowed=undefined,auth,children=undefined,redirectTo="/"}:
export const ProtectedRoute:React.FC<AuthProps> =({children}):React.ReactNode=>{
    //const objetoContexto = useContext(VariableContext);
    const {Auth} = useContext(AppContext);
    useEffect(()=>{
        console.log("Usuario"+Auth)
        console.log("test"+ JSON.stringify(Auth))
        //console.log(isAllowed)
    },[Auth])
    if (!Auth.isAuthenticated) {
        return <Navigate to={"/"} />;
    }
    //console.log(isAllowed)
    return (children)?children: <Outlet/>;
}
