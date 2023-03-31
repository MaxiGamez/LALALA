import React from "react";
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/footer";
import './App.css';
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./componentes/CartContainer";
import CheckoutForm  from './componentes/CheckoutForm';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
      return (
            <div className="container">
                  <CartContextProvider>
                        <BrowserRouter>

                              <NavBar />

                              <Routes>
                                    <Route path="/" element={<ItemListContainer greeting={"Productos Intipan"} />} />

                                    <Route path="/productos/:idUser" element={<ItemDetailContainer />} />

                                    <Route
                                          path="/category/:category"
                                          element={<ItemListContainer greeting={"Para su mesa y para cocinar"} />} />

                                    <Route path="/cart" element={<CartContainer />}/>

                                    <Route exact path="/checkout" element={<CheckoutForm />}/>
                              </Routes>
                              <ToastContainer/>

                              <Footer />
                              
                        </BrowserRouter>
                  </CartContextProvider>
            </div>
      );
}

export default App;

