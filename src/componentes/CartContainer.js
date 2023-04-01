import React from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { CartTotal } from "./CartTotal";
import { CartDetail } from "./CartDetail";
import { Link } from 'react-router-dom'


function CartContainer() {

    const { cart, setCart } = useContext(cartContext);

    const clearCart = () => {
        setCart([]);
    };
    return cart.length === 0 ? (
        <div className="empty">
            <h1>No hay Items en el Carrito</h1>
        </div>
    ) : (<div>

        <table className="cartList">
            <thead className="cartList_head">
                <tr className="cartList_row">
                    <th>Miniatura</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Remover</th>
                </tr>
            </thead>

            <tbody className="cartDetalle">
                {cart.sort((x, y) => x.num - y.num).map((user) => (
                    <tr key={user.id} >
                        <CartDetail prod={user} />
                    </tr>
                ))}
            </tbody>
        </table>


        <div className="cartHead">

            <button className="boton-clear-cart" onClick={clearCart}>Vaciar carrito</button>

            <CartTotal />
            

            <Link className="boton-pagar" to="/checkout">Finalizar Compra</Link>

        </div>
    </div>
    );
}

export default CartContainer;