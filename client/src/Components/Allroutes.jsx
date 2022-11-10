import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Privateauth from "../Pages/Privateauth";
import Logout from "../Pages/Logout";

const Allroutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Privateauth>
              <Home />
            </Privateauth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
