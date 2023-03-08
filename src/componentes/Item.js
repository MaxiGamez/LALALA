import React from "react";
import "../App.css";

const Item = ({ id, nombre, avatar, peso, precio }) => {

    return (

        <div className="Item-list-container">

            <ul className="item-list">

                <li className="item-card" id={id}>
                    <img src={avatar} />
                    <h4>{`${nombre}`}</h4>
                    <p>{peso}gr</p>
                    <p>${precio}</p>
                    <button>Ver Mas</button>
                </li>

            </ul>
        </div>
    )

}

export default Item;