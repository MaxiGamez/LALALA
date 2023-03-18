import React from "react";
import "../App.css";
import ItemCount from "./ItemCount";



const Item = ({ id, nombre, avatar, peso, precio, stock }) => {
    
    function onAddToCart(count) {
        alert(`Agregaste ${count} items al carrito`);
       
    }


    return (

        <div className="Item-list-container">

            <ul className="item-list">

                <li className="item-card" id={id}>
                    <img src={avatar} />
                    <h4>{`${nombre}`}</h4>
                    <p>{peso}gr</p>
                    <p>${precio}</p>
                    <p>{stock}ud.</p>
                    <br></br>
                    <div>
                    {<ItemCount onAddToCart={onAddToCart} initial={1} stock={stock}/>}
                </div>

                </li>

            </ul>
        </div>
    )

}

export default Item;