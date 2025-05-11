import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Author = () => {
  const [authors, setAuthor] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getAuthor();
  }, []);

  function getAuthor() {
    fetch("http://127.0.0.1:8080/author")
      .then((response) => response.json())
      .then((data) => {
        setAuthor(data);
      })
      .catch((error) => {
        console.error("Error fetching Menu:", error);
      });
  }

  return (
    <div style={{ backgroundColor: "rgb(221, 214, 206)" }}>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-brand btn btn-link text-decoration-none text-light"
              onClick={() => navigate("/")}
            >
              Global Bites
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/menu")}
                  >
                    Menu
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/map")}
                  >
                    Map
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/explore")}
                  >
                    Explore
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/review")}
                  >
                    Reviews
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/author")}
                  >
                    Author
                  </button>
                </li>
                  <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/signup")}
                  >
                    Signup
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/cart")}
                  >
                    Cart
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-decoration-none"
                    onClick={() => navigate("/admin")}
                  >
                    Admin
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div style={{ backgroundColor: "rgb(221, 214, 206)" }}>
        <div
          className="container"
          id="intro"
          style={{ backgroundColor: "rgb(221, 214, 206)" }}
        >
          <br />
          <br />
          <br />

          <div className="p-2 text-center">
            <h1 style={{ fontFamily: "serif" }}>Meet The Authors</h1>
            <h3 style={{ fontFamily: "serif" }}>
              Construction of User Interfaces, Spring 2025
            </h3>
            <h3 style={{ fontFamily: "serif" }}>March 12, 2025</h3>
          </div>
        </div>
        <div className="album py-5 bg-body-tertiary">
          <div className="container-sm" style={{ maxWidth: "800px" }}>
            <div
              id="col"
              className="row row-cols-1 row-cols-md-2 g-3 justify-content-center"
            >
              {authors.map((card) => (
                <div className="card shadow-sm me-1" key={card._id} style={{ height: "100%" }}>
                  <div className="card-body">
                    <p className="card-text">
                      {" "}
                      <strong>{card.name}</strong>
                      <br />
                      <br />
                      <strong>Email: </strong> {card.email}
                      <br />
                      <br />
                      <strong>Year:</strong>
                      {card.year}
                      <br />
                      <br />
                      {card.description} <br />
                      <br />
                    </p>
                  </div>
                </div>
              ))}
              ;
            </div>
          </div>
        </div>
      </div>

      <footer className="container-fluid bg-dark text-light py-4">
        <div className="text-center">
          <p className="mb-0">
            &copy; 2025 Global Bites, Inc. &#8226;{" "}
            <a href="#" className="text-light">
              Back to top
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Author;
