import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ loggedInUser, setLoggedInUser }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || (!isLogin && !form.confirmPassword)) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (isLogin) {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password })
      })
        .then(res => {
          if (!res.ok) throw new Error("Invalid credentials");
          return res.json();
        })
        .then(data => {
          setLoggedInUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
          setMessage(`Login successful! Welcome, ${data.user.email}`);
          setTimeout(() => navigate("/"), 1500);
        })
        .catch(err => setMessage(err.message));
    }  
    else {
      fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password })
      })
        .then(res => {
          if (!res.ok) throw new Error("Signup failed");
          return res.text();
        })
        .then(msg => {
          setMessage(msg + " Please log in.");
          setIsLogin(true);
          setForm({ email: "", password: "", confirmPassword: "" });
        })
        .catch(err => setMessage(err.message));
    }      
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand btn btn-link text-decoration-none text-light" onClick={() => navigate("/")}>
            Global Bites
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
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
        <h2 className="text-center mb-4">{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          {!isLogin && (
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}
          <button
            type="submit"
            className="btn btn-primary w-100"
          >
            {isLogin ? "Login" : "Signup"}
          </button>

          {loggedInUser && (
            <button
              className="btn btn-outline-danger w-100 mt-3"
              onClick={() => {
                localStorage.removeItem("user");
                setLoggedInUser(null);
                setMessage("You have been logged out.");
                navigate("/signup");
              }}
            >
              Logout
            </button>
          )}
        </form>
        <div className="text-center mt-3">
          <button className="btn btn-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
          {message && <p className="mt-3">{message}</p>}
        </div>
      </div>

      <footer className="container-fluid bg-dark text-light py-4">
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Global Bites, Inc. &#8226; <a href="#" className="text-light">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
