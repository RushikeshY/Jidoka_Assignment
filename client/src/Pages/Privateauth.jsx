import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import {Navigate} from "react-router-dom";

const Privateauth = ({children}) => {

  const isAuth=useSelector((state)=>state.isAuth.isAuth);

  console.log(isAuth);
  
  if(isAuth)
  {
    return (
    <>
    {children}
    </>
    )

  }
  else{
    <Navigate to={"/login"}/>
    
  }
}

export default Privateauth