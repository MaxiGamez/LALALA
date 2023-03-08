import React from 'react'
import "../App.css";
import Item from "./Item"

export default function ItemList({ users, category }) {

    const categoria = users.filter((p) => (p.category === category));

    console.log(categoria)

    if (category) {
        return categoria.map(
            (producto) => (
                <div key={producto.id}><Item id={producto.id}
                    nombre={producto.nombre}
                    peso={producto.peso}
                    precio={producto.precio}
                    avatar={producto.avatar} />
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
                            <img src={user.avatar} />
                            <h4>{`${user.nombre}`}</h4>
                            <p>{user.peso}gr</p>
                            <p>${user.precio}</p>
                            <button>Ver Mas</button>
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}
