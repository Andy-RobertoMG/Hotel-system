import  { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as authentication from './index';


//export const ProtectedRoute =({isAllowed=undefined,auth,children=undefined,redirectTo="/"}:
export const ProtectedRoute =({auth,children,isAllowed,redirectTo}:authentication.ProtectionRoute):React.ReactElement|React.ReactNode=>{
    useEffect(()=>{
        console.log("Usuario"+auth)
        console.log("test"+ JSON.stringify(auth))
        //console.log(isAllowed)
    },[auth])
    if (!auth.isAuthenticated) {
        
        return <Navigate to={"/"} />;
    }
    //console.log(isAllowed)
    return (children)?children: <Outlet/>;
}
