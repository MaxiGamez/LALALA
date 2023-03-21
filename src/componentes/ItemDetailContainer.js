import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import Loader from "./Loader";

// --------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAcYk26hqx6nD1ArnEZb4On8cmG_H37DKg",
    authDomain: "proyecto-en-reactjs.firebaseapp.com",
    projectId: "proyecto-en-reactjs",
    storageBucket: "proyecto-en-reactjs.appspot.com",
    messagingSenderId: "849839207809",
    appId: "1:849839207809:web:05f3b4ac5aa68847bb2480",
    measurementId: "G-LSNEVN8JHS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// -------------------------------------------------------------------------------

async function singleItemData(idItem) {
    const productosCollecionRef = collection(db, "productos");
    const docRef = doc(productosCollecionRef, idItem);

    const docSnapshot = await getDocs(docRef);

    if (docSnapshot.exist() === false)
        throw new Error("No existe el documento");
        
    return { ...docSnapshot.data(), id: docSnapshot.id };
}
// -------------------------------------------------------------------------------

function ItemDetailContainer() {
    const [user, setUsers] = useState({});

    const params = useParams();
    const idUser = params.idUser;


    useEffect(() => {
        singleItemData(idUser).then((respuesta) => {
            setUsers(respuesta);
        })
            .catch(error => alert(error));
    }, []);

    const { addItem, isInCart } = useContext(cartContext);

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
                    {<ItemCount onAddToCart={onAddToCart} initial={0} stock={user.stock} />}
                </div>

            </div>
        </>
    );
}


export default ItemDetailContainer;