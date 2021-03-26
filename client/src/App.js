import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";

const App = () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <div className="logo">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">
              <h2>ShopStix</h2>
            </Link>
          </div>
          <div className="header-links">
            <ul>
              <li>
                <a href="/">Cart</a>
              </li>
              <li>
                <a href="/">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
        <aside className="sidebar" onClick={closeMenu}>
          <a href="/">
            <span>iPhone</span>
          </a>
          <a href="/">
            <span>Android</span>
          </a>
          <a href="/">
            <span>Cart</span>
          </a>
          <a href="/">
            <span>Back</span>
          </a>
        </aside>
        <main>
          <div className="content">
            <Route path="/" exact={true} component={Home} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart/:id?" component={Cart} />
          </div>
        </main>
        <div className="footer">&copy; 2020 all rights reserved.</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
