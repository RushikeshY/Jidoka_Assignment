import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../Redux/Auth/authaction";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        alert("Login SuccessFull");
        dispatch(loginSuccess(res.data));
        navigate("/");
      })
      .catch((e) => {
        alert("Login Failed");
        console.log(e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      style={{height:"30px",width:"200px"}}
        type="text"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        style={{height:"30px",width:"200px"}}
        placeholder="enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}

      />
      <br />
      <br />
      <input style={{height:"30px",width:"100px"}} type="submit" />
    </form>
  );
};

export default Login;
