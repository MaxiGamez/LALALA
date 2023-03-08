import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import CartWidget from "./CartWidget";

export default function NavBar() {
    const category = { mesa: "mesa", cocinar: "cocinar" }



    return (

        <div className="contenido-navbar">

            <Logo />

            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Productos</Link>
                        <Link to={`/category/${category.mesa}`}>Para su mesa</Link>
                        <Link to={`/category/${category.cocinar}`}>Para cocinar</Link>
                    </li>
                </ul>
            </div>

            <CartWidget />

        </div>
    )
    
}