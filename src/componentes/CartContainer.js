import React from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import { CartTotal } from "./CartTotal";
import { CartDetail } from "./CartDetail";
import {Link} from 'react-router-dom'


function CartContainer() {

  const { cart } = useContext(cartContext);


  return cart.length === 0 ? (
    <div className="empty">
      <h1>No hay Items en el Carrito</h1>
    </div>
  ) : ( <div>
            <div className="cartHead">
            <Link to="/checkout">CheckOut</Link>
            <CartTotal/>
            </div>

            <table className="cartList">
                <thead className="cartList_head">
                    <tr className="cartList_row">
                        <th>Miniatura</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Remover</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map((user) => (
                        <tr key={user.id} >
                            <CartDetail prod= {user}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
}

export default CartContainer;