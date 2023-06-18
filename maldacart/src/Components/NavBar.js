import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <div className="d-flex bg-dark justify-content-between align-items-center ps-4 pe-5 navbar">
            <h4 style={{color : "white"}}>Shopping Cart</h4>
            <div>
                <Link to="/" className="nav-item">Home Page</Link>
                <Link to="myCart" className="nav-item">Cart Page</Link>
            </div>
        </div>
    )
}

export default NavBar;