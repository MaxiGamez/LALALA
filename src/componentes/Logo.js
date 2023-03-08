import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to= {"/"}>
            <img src="/img/logo-blanco.jpg" alt="Logo sitio" height="150" width="250"></img>
        </Link>
    )
}