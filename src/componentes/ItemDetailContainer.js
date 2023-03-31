import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import Loader from "./Loader";
import { getDoc, doc,} from "firebase/firestore";
import { db } from "../services/firestore";

function ItemDetailContainer() {
    const { addItem } = useContext(cartContext);
    const { idUser } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getProducto = async () => {
            const docRef = doc(db, "asyncMock", idUser);
            const docSnapshot = await getDoc(docRef);
            setUser({ id: docSnapshot.id, ...docSnapshot.data() })}
        getProducto();
    }, [idUser]);
    

    function onAddToCart(count) {
        addItem(user, count);
    }

    if (user.id === undefined) return <Loader />;

    return (
        <>
            <div className="item-detail-container">
                <div className="card-img">
                    <img src={user.avatar} alt={user.nombre} />
                </div>

                <div className="item-card" key={user.id}>

                    <h1>{`${user.nombre}`}</h1>
                    <h2>${user.precio}</h2>
                    <h3>{user.peso}gr</h3>
                    <small>{user.stock}ud.</small>

                </div>
                <div>
                    {<ItemCount onAddToCart={onAddToCart} initial={0} stock={user.stock} />}
                </div>

            </div>
        </>
    );
}


export default ItemDetailContainer;