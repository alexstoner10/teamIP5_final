import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  let navigate = useNavigate();
  const handleRemove = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const subtotal = cart.reduce(
    (sum, dish) => sum + parseFloat(dish.price * dish.quantity),
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += delta;

    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.07;
    const total = subtotal + tax;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand btn btn-link text-decoration-none text-light" onClick={() => navigate("/")}>Global Bites</button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/")}>Home</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/menu")}>Menu</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/map")}>Map</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/explore")}>Explore</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/review")}>Reviews</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/author")}>Author</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/signup")}>Signup</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/cart")}>Cart</button></li>
              <li className="nav-item"><button className="nav-link btn btn-link" onClick={() => navigate("/admin")}>Admin</button></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.product_name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.product_name}</h5>
                    <p className="card-text">${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-secondary me-2" onClick={() => handleQuantityChange(index, -1)}>–</button>
                      <span>{item.quantity}</span>
                      <button className="btn btn-outline-secondary ms-2" onClick={() => handleQuantityChange(index, 1)}>+</button>
                    </div>
                    <button className="btn btn-danger mt-2" onClick={() => handleRemove(index)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="text-end">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (7%): ${tax.toFixed(2)}</p>
          <h5>Total: ${total.toFixed(2)}</h5>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-secondary" onClick={() => navigate("/menu")}>Continue Shopping</button>
          <button className="btn btn-primary" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
        <button className="btn btn-link mt-3" onClick={() => navigate("/order-history")}>View Order History</button>
      </div>

      <footer className="container-fluid bg-dark text-light py-4 mt-5">
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Global Bites, Inc. • <a href="#" className="text-light">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
