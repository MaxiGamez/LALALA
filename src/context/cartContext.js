import { createContext, useState } from "react";


const cartContext = createContext({ cart: [] });

const Provider = cartContext.Provider;

export function CartContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (item, newCantidad) => {
        let newCart = cart.filter((prod) => prod.id !== item.id);
        newCart.push({...item, quantity: newCantidad,subtotal: item.precio * newCantidad});
        setCart(newCart);
    };

    // Funcion vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Funciones de eliminar item del carrito
    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    };

    // Funcion del total del carrito
    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    // Total del carrito
    const total = cart.reduce((acc,el) => acc+el.subtotal,0);

    return (
        <>
            <Provider value={{
                cart,
                quantity,
                total,
                deleteItem,
                addItem,              
                clearCart,
                setCart,
            }}>
                {children}
            </Provider>
        </>
    );

}

export default cartContext;