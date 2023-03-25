import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function CheckoutCart({ cart, total }) {
 
    const navigateTo = useNavigate();

    async function handleCheckout() {
        const orderData = {
          buyer: { name: "Santiago", phone: "12345", email: "santi@santi.com" },
          items: cart,
          total: total,
          timestamp: new Date(),
        };
        const id= await createOrder(orderData);

        navigateTo(`/checkout/${id}`)
}

return(
    <div>
    
    <button onClick={handleCheckout}>Terminar Compra</button>
    
  </div>

)
}

export default CheckoutCart;
