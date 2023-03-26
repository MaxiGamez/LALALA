import { useContext } from "react";
import cartContext from "../context/cartContext";


export const CartTotal = () => {
  const { cart } = useContext(cartContext);

  const total = cart.reduce((acc,el) => acc+el.subtotal,0);


  return (

    <div className="cart-total">
      <h1>Total</h1>
      <h1 className="cart-total-title">${total}</h1>
    </div>

 
  )
}
