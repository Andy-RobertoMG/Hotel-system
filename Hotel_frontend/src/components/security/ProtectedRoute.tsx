import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
export const ProtectedRoute = ({isAllowed,authenticate,children,redirectTo="/"})=>{
  useEffect(()=>{
    console.log("Usuario"+authenticate)
    console.log("test"+ JSON.stringify(authenticate))
    console.log(isAllowed)
  },[authenticate])
  if (!isAllowed||!authenticate.authenticated) {
    console.log(isAllowed)
    return <Navigate to={redirectTo} />;
  }
  console.log(isAllowed)
  return children ? children : <Outlet/>;
}
