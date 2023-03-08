import "../App.css";
import { useState, useEffect } from "react";
import productos from "../asyncMock";
import { useParams } from "react-router-dom";

function singleItemData(idItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let encontrado = productos.find((item) => item.id === Number(idItem));
            resolve(encontrado);
        }, 1000);
    });
}

function ItemDetailContainer({ greeting }) {
    const [user, setUsers] = useState([]);

    const params = useParams();

    const idUser = params.idUser;

    useEffect(() => {
        singleItemData(idUser).then((respuesta) => {
            setUsers(respuesta);
        });
    }, []);

    return (
        <>
            <div className="Item-list-container">

                <h1>{greeting}</h1>

                <ul className="item-list">
                    <li className="item-card" key={user.id}>
                        <img src={user.avatar} />
                        <h4>{`${user.nombre}`}</h4>
                        <small>{user.peso}</small>
                        <p>${user.precio}</p>
                        <button>Ver Mas</button>
                    </li>
                </ul>
            </div>
        </>
    );
}


export default ItemDetailContainer;