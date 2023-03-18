import "../App.css";
import { useState, useEffect } from "react";
import productos from "../asyncMock";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import Loader from "./Loader";


function singleItemData(idItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let encontrado = productos.find((item) => item.id === Number(idItem));
            if(encontrado !== undefined);
            resolve(encontrado);
          reject("No encontramos ese producto");
        }, 1000);
    });
}

function ItemDetailContainer() {
    const [user, setUsers] = useState([]);

    const params = useParams();

    const idUser = params.idUser;


    useEffect(() => {
        singleItemData(idUser).then((respuesta) => {
            setUsers(respuesta);

        }).catch(error => alert(error))
    }, []);

    const { addItem } = useContext(cartContext);

    function onAddToCart(count) {
        alert(`Agregaste ${count} items al carrito`);
        addItem(user, count);
    }

    if (user.id === undefined) return <Loader />;

    return (
        <>
            <div className="item-detail-container">
                <div className="card-img">
                    <img src={user.avatar} alt={user.name} />
                </div>

                <div className="item-card" key={user.id}>

                    <h1>{`${user.nombre}`}</h1>
                    <h2>${user.precio}</h2>
                    <h3>{user.peso}gr</h3>
                    <small>{user.stock}ud.</small>

                </div>
                <div>
                    {<ItemCount onAddToCart={onAddToCart} initial={0} stock={user.stock}/>}
                </div>

            </div>
        </>
    );
}


export default ItemDetailContainer;