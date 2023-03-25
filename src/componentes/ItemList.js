import React from 'react'
import "../App.css";
import Item from "./Item"
import Button from './Button';
import { Link } from "react-router-dom";

export default function ItemList({ users, category }) {

    const categoria = users.filter((p) => (p.category === category));

    if (category) {
        return categoria.map((producto) => (
                <div key={producto.id}>
                    <Item
                        id={producto.id}
                        avatar={producto.avatar}
                        nombre={producto.nombre}
                        peso={producto.peso}
                        precio={producto.precio}
                        stock={producto.stock}
                        num={producto.num}
                    />
                </div>
            )
        )
    }
    else {
        return (
            <div className="Item-list-container">
                <ul className="item-list">
                    {users.map((user) => (

                        <li className="item-card" key={user.id}>
                            <img src={user.avatar} alt={user.nombre}/>

                            <h2>{`${user.nombre}`}</h2>
                            
                            <h4>{user.peso}gr</h4>
                            <h4>${user.precio}</h4>
                            <br></br>
                            <Link to={`/productos/${user.id}`}>
                                <Button>
                                    Ver Detalles
                                </Button>
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}
