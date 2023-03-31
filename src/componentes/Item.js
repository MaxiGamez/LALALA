import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Button from "./Button";

const Item = ({ id, nombre, avatar, peso, precio}) => {

    return (

        <div className="Item-list-container2">

            <ul className="item-list2">

                <li className="item-card" id={id}>
                    <img alt="imagen" src={avatar} />

                    <h3>{`${nombre}`}</h3>

                    <h4>{peso}gr</h4>

                    <h4>${precio}</h4>

                    
                    <br></br>

                    <Link to={`/productos/${id}`}>
                        <Button>
                            Ver Detalles
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    )

}

export default Item;