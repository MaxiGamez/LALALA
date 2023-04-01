import { useState } from "react";
import Button from "./Button";
import { toast, Slide } from 'react-toastify';

const ItemCount = ({ initial, stock, onAddToCart }) => {
    initial = 1;
    const [count, setCount] = useState(initial);

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const addToCart = () => {
        onAddToCart(count);

        toast.error('Producto agregado al Carrito!', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            icon: '🔴',
        });

    };

    return (
        <div className="itemcount-container">
            <div className="item-count-accion">
                <Button onTouchButton={decrease} color="red">
                    -
                </Button>

                <span className="contador"> {count} </span>

                <Button onTouchButton={increase} color="green">
                    +
                </Button>
            </div>


            <div className="item-count-boton">
                <Button color="#6d2b90" className="boton"
                    onTouchButton={addToCart}
                >
                    Agregar al carrito
                    
                </Button>
            </div>
        </div>

    );
};
export default ItemCount;