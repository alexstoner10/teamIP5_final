import React from "react";
import { useNavigate } from "react-router-dom";

const History = ({ orderHistory }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand btn btn-link text-light" onClick={() => navigate("/")}>
            Global Bites
          </button>
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

      {/* Page Content */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Order History</h2>

        {orderHistory.length === 0 ? (
          <p className="text-center">You have no past orders.</p>
        ) : (
          orderHistory.map((order, index) => {
            const subtotal = order.items.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            );
            const tax = subtotal * 0.07;
            const total = subtotal + tax;

            return (
              <div key={index} className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Order #{index + 1}</h5>
                  <p className="card-text">
                    <strong>Name:</strong> {order.paymentInfo.name} <br />
                    <strong>Email:</strong> {order.paymentInfo.email} <br />
                    <strong>Address:</strong> {order.paymentInfo.address}
                  </p>

                  <ul className="list-group mb-3">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="list-group-item d-flex justify-content-between">
                        <span>{item.title} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-end">
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Tax (7%): ${tax.toFixed(2)}</p>
                    <h5>Total: ${total.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            );
          })
        )}

        <div className="text-center">
          <button className="btn btn-primary mt-3" onClick={() => navigate("/menu")}>
            Back to Menu
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-dark text-light py-4 mt-5">
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Global Bites, Inc. • <a href="#" className="text-light">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
};

export default History;