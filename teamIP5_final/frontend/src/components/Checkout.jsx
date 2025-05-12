import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, setCart, orderHistory, setOrderHistory }) => {
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, address, cardNumber, expiryDate, cvc } = paymentInfo;
  
    if (cart.length === 0) return alert("Your cart is empty.");
    if (!name || !email || !address || !cardNumber || !expiryDate || !cvc)
      return alert("Please fill in all the fields.");
  
    const orderData = {
      items: cart,
      total: parseFloat(total),
      name,
      email,
      address,
      cardNumber,
      expiryDate,
      cvc
    };
  
    try {
      const res = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });
  
      if (res.ok) {
        const result = await res.json();
        navigate("/confirmation", {
          state: {
            order: result,
            name,
            email,
            address
          }
        });
      } else {
        throw new Error("Failed to process order");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong. Please try again.");
    }
  };  

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.07;
  const total = (subtotal + tax).toFixed(2);

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
        <h2 className="text-center mb-4">Checkout</h2>

        <div className="mb-3">
          <label>Full Name</label>
          <input name="name" className="form-control" value={paymentInfo.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input name="email" type="email" className="form-control" value={paymentInfo.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Billing Address</label>
          <input name="address" className="form-control" value={paymentInfo.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Card Number</label>
          <input name="cardNumber" className="form-control" value={paymentInfo.cardNumber} onChange={handleChange} />
        </div>
        <div className="row">
          <div className="col">
            <label>Expiry Date</label>
            <input name="expiryDate" className="form-control" value={paymentInfo.expiryDate} onChange={handleChange} />
          </div>
          <div className="col">
            <label>CVC</label>
            <input name="cvc" className="form-control" value={paymentInfo.cvc} onChange={handleChange} />
          </div>
        </div>

        <h4 className="mt-4">Your Order</h4>
        <ul className="list-group mb-3">
          {cart.map((item, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{item.product_name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h5 className="text-end">Subtotal: ${subtotal.toFixed(2)}</h5>
        <h5 className="text-end">Tax (7%): ${tax.toFixed(2)}</h5>
        <h4 className="text-end">Total: ${total}</h4>


        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={handleSubmit}>Submit Payment</button>
        </div>
      </div>

      <footer className="container-fluid bg-dark text-light py-4 mt-5">
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Global Bites, Inc. • <a href="#" className="text-light">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
