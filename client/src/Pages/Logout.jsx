import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { logoutSuccess } from "../Redux/Auth/authaction";
const Logout = () => {
  const isAuth = useSelector((state) => state.isAuth.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
console.log(isAuth);
  useEffect(() => {
    dispatch(logoutSuccess(null))
    navigate("/login")
   
  }, [])
  
  return <div></div>;
};

export default Logout;
