import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Item = ({ id, nombre, avatar, peso, precio }) => {

    return (

        <div className="Item-container">

                <div className="item-card2" id={id}>

                    <img alt="imagen" src={avatar} />

                    <h2>{`${nombre}`}</h2>

                    <h4>{peso}gr</h4>

                    <h4>${precio}</h4>

                    <br></br>

                    <Link to={`/productos/${id}`}>
                        <Button>
                            Ver Detalles
                        </Button>
                    </Link>
                </div>          
        </div>
    )

}

export default Item;