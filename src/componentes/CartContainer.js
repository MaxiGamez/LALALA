import React from "react";
import { useContext } from "react";
import cartContext from "../context/cartContext";
import Button from "./Button";
import { CartTotal } from "./CartTotal";


function CartContainer() {
  const { cart } = useContext(cartContext);




  return cart.length === 0 ? (
    <div className="empty">
      <h1>No hay Items en el Carrito</h1>
    </div>
  ) : (  
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
                        <tr key={user.id} className="cartList_row">
                            <td>
                                <img height={50} src={user.avatar} alt={user.nombre} />
                            </td>
                            <td>{user.nombre}</td>
                            <td>$ {user.precio}</td>
                            <td>{user.quantity}</td>
                            <td>
                                <Button color="#c63224">X</Button>
                            </td>
                            <CartTotal/>
                        </tr>
                    ))}
                </tbody>
            </table>

  );
}

export default CartContainer;