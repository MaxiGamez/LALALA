import { useContext } from "react";
import cartContext from "../context/cartContext";


export const CartTotal = () => {
  const { cart } = useContext(cartContext);

  const total = cart.reduce((acc,el) => acc+el.subtotal,0);


  return (

    <div className="cart-total">
      <h1> El total es: ${total}</h1>
    </div>

 
  )
}
