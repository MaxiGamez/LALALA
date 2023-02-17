import logo from './logo.svg';
import React from "react";
import NavBar from "./componentes/NavBar";
import Logo from "./componentes/Logo";
import CartWidget from "./componentes/CartWidget";
import ItemListContainer from "./componentes/ItemListContainer";
import './App.css';

function App() {
      return (
            
            <div className="Header">
                  <header className="Header__content">
                        <div className="Header__content-logo">
                              <Logo />
                        </div>
                        <div>
                              <NavBar />
                        </div>
                        <div className="Header__content-cart">
                              <CartWidget />
                        </div>
                  </header>
                  <div>
                        <ItemListContainer greeting={"Bienvenidos"} />
                  </div>
            </div>

      );
}

export default App;
