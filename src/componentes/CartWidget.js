import {useContext} from "react";
import { BsFillCartFill } from 'react-icons/bs';
import "../App.css";
import cartContext from "../context/cartContext";


function CartWidget() {
  const { quantity } = useContext(cartContext);

    return (
      <span className="cart-widget">
        <BsFillCartFill className="icon" />
        <span className="badge">{ quantity === 0 ? <p></p> : quantity }</span>
      </span>
    ); 
  }

  export default CartWidget;

