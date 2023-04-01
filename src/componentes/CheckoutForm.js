import "../App.css";
import React, { useState } from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { collection, addDoc, getFirestore } from "firebase/firestore";


const CheckoutForm = () => {

    const { cart, quantity, total, clearCart } = useContext(cartContext);

    const products = [];
    cart.map((prod) => {
        return products.push({
            title: prod.nombre,
            price: prod.precio,
            quantity: prod.quantity,
            subtotal: prod.subtotal,
        });
    });

    let fecha = new Date();
    let date = fecha.toLocaleString();

    const initialOrder = {
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
    };

    const [buyer, setbuyer] = useState(initialOrder);
    const [id, setId] = useState();

    const sendOrder = (e) => {
        setbuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };


    const guardarDatos = (e) => {
        e.preventDefault();
        const order = { buyer, total, quantity, products, date };
        const db = getFirestore();
        const formCollection = collection(db, "checkOut");
        addDoc(formCollection, order).then((snapshot) => {
            setbuyer(initialOrder);
            setId(snapshot.id);
            clearCart();
        });
    };

    return (
        <div className="row">
            {typeof id !== "undefined" ? (
                <div className="envio">
                    <h4>El formulario se ha enviado con el id:</h4>
                    <br />
                    <h3>
                        <strong>{id}</strong>
                    </h3>
                </div>
            ) : (
                ""
            )}
            <div className="col-lg-6">
                <div className="box-element">
                    <form className="form-check" onSubmit={guardarDatos}>
                        <div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    placeholder="Nombre.."
                                    onChange={sendOrder}
                                    value={buyer.name}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email.."
                                    onChange={sendOrder}
                                    value={buyer.email}
                                />
                            </div>
                        </div>
                        <div id="shipping-info">
                            <hr />
                            <p>Informacion de envio :</p>
                            <hr />
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="address"
                                    placeholder="Direccion.."
                                    onChange={sendOrder}
                                    value={buyer.address}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="city"
                                    placeholder="Ciudad.."
                                    onChange={sendOrder}
                                    value={buyer.city}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="state"
                                    placeholder="Localidad.."
                                    onChange={sendOrder}
                                    value={buyer.state}
                                />
                            </div>
                            <div className="form-field">
                                <input
                                    className="form-control"
                                    type="text"
                                    name="zipcode"
                                    placeholder="Codigo postal.."
                                    onChange={sendOrder}
                                    value={buyer.zipcode}
                                />
                            </div>
                        </div>

                        <hr />
                        <input
                            id="form-button"
                            className="btn btn-secondary me-md-2"
                            type="submit"
                            value="Pagar"
                        />
                    </form>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="box-element-2">
                    <h5>Resumen del pedido</h5>
                    <hr />
                    <div>
                        <div className="item-box">
                            {cart.map((prod) => (
                                <div key={prod.id} className="cart-row">
                                    <div style={{ flex: "1" }}>
                                        <img
                                            className="row-image"
                                            src={prod.avatar}
                                            alt={prod.nombre}
                                        />
                                    </div>
                                    <div style={{ flex: "2" }}>
                                        <p>{prod.nombre}</p>
                                    </div>
                                    <div style={{ flex: "1" }}>
                                        <p>${prod.precio}</p>
                                    </div>
                                    <div style={{ flex: "1" }}>
                                        <p>x {prod.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="quant-total">
                            <h5>Items: {quantity}</h5>
                            <h5>Total: ${total}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
