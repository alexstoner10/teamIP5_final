import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Confirmation = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { name, email, address } = state || {};

  const subtotal = cart.reduce(
    (sum, dish) => sum + parseFloat(dish.price * dish.quantity),
    0
  );
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div>
      <div>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          Order Confirmation
        </h2>
        <hr className="featurette-divider"></hr>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
            margin: "1rem 0",
          }}
        >
          Payment Successful!
        </h3>
        <h3
          style={{
            fontSize: "1.25rem",
            textAlign: "center",
            margin: "1rem 0",
            paddingBottom: "1rem",
          }}
        >
          We hope you enjoy your courses! Please consider more in the future.
          Thank you!
        </h3>
      </div>
      <hr className="featurette-divider"></hr>
      <div
        style={{ padding: "1rem", marginBottom: "1rem", paddingBottom: "1rem" }}
      >
        <h3
          style={{ fontSize: "1.5rem", fontWeight: "600", textAlign: "center" }}
        >
          Billing Address
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Billing Address: {address}</p>
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>

      {cart.map((dish, index) => (
        <div
          key={index}
          className="review-card"
          style={{ marginBottom: "1rem", textAlign: "center" }}
        >
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>
              {dish.product_name}
            </h3>
          </div>
          <div>
            <p>Quantity: {dish.quantity}</p>
          </div>
          <div>
            <p>Price Per Dish: ${dish.price}</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>
              Price: ${(dish.price * dish.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}

      <hr className="featurette-divider"></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1.25rem",
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        <p>Price: ${subtotal.toFixed(2)}</p>
        <p>Tax (7%): ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="confirmation"
          onClick={() => {
            setCart([]);
            navigate("/");
          }}
        >
          Back to Browse
        </button>
      </div>

      <footer className="container-fluid bg-dark text-light py-4 mt-5">
        <div className="text-center">
          <p className="mb-0">
            &copy; 2025 Global Bites, Inc. •{" "}
            <a href="#" className="text-light">
              Back to top
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Confirmation;
