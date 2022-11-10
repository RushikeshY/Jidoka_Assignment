import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const isAuth = useSelector((state) => state.isAuth.isAuth);

  return (
    <div
      style={{
        height: "70px",
        padding: "10px",
        marginBottom: "20px",
        width: "100%",
        background: "lightgreen",
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"      }}
    >
      <Link to="/"><h2>Home</h2></Link>
      {isAuth ? (
        <Link to="/logout"><h2>Logout</h2> </Link>
      ) : (
        <Link to="/login"> <h2>Login</h2></Link>
      )}
    </div>
  );
};

export default Navbar;



