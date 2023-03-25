import { useContext } from "react";
import cartContext from "../context/cartContext";


export const CartTotal = () => {
  const { cart } = useContext(cartContext);

  const total = cart.reduce((acc,el) => acc+el.precio,0);


  return (
    <div className="cart-total">
      <h2>${total}</h2>
    </div>
  )
}
