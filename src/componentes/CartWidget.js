import {useContext} from "react";
import { BsFillCartFill } from 'react-icons/bs';
import "../App.css";
import cartContext from "../context/cartContext";


function CartWidget() {
  const {cart, test} = useContext(cartContext);
  
  const cartCount = cart.length;

    return (
      <span className="cart-widget">
        <BsFillCartFill className="icon" />
        <span className="badge">{cartCount}</span>
      </span>
    );
  }
  
  export default CartWidget;
