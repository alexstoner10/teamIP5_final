import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import food from "../assets/images/food.jpg";

const Explore = () => {
  const [cards, setExplore] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getExplore();
  }, []);

  function getExplore() {
    fetch("http://127.0.0.1:8080/explore")
      .then((response) => response.json())
      .then((data) => {
        setExplore(data);
      })
      .catch((error) => {
        console.error("Error fetching Menu:", error);
      });
  }

  return (
    <div style={{ backgroundColor: "#F7EED3" }}>
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

      <div style={{ backgroundColor: "#F7EED3" }}>
        <div className="container my-5" id="intro2">
          <div
            className="p-5 text-center rounded-3"
            style={{
              fontFamily: "serif",
              backgroundColor: " #F7EED3",
            }}
          >
            <h1>Explore The Cultures</h1>
            <h3>Read More About The Foods of Different Cultures!</h3>
            <img
              src={food}
              alt="food"
              style={{
                width: "65%",
                height: "50%",
                borderRadius: "21px 21px 0 0",
              }}
            />

            <br />
            <br />
          </div>
          <hr className="featurette-divider"></hr>
          <p id="introParagraph">
            Food is a powerful storyteller, shaped by geography, climate, trade,
            and cultural exchange. Each dish represents the history <br /> and
            identity of the people who create it. Discover how these five
            renowned cuisines evolved through time, climate, and global
            influences.
          </p>
          <hr className="featurette-divider"></hr>
        </div>

        <div
          className="album py-5"
          style={{ backgroundColor: " #F7EED3" }}
        >
          <div className="container-sm">
            <div
              id="col"
              className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-1 justify-content-center"
              style={{ backgroundColor: "#F7EED3", padding: "1rem" }}
            >
              {cards.map((card) => (
                <div
                  data-section={true}
                  id={card.name}
                  className="card shadow-sm me-2"
                  style={{ height: "100%" }}
                  key={card._id}
                >
                  <br />
                  <img
                    src={card.image}
                    alt={card.name}
                    style={{
                      width: "75%",
                      height: "auto",
                      borderRadius: "30px",
                      display: "block",
                      margin: "auto",
                    }}
                  />
                  <div className="card-body" style={{ textAlign: "center" }}>
                    <br />
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">
                      <strong>Historical Influence: </strong>
                      {card.historical}
                    </p>
                    <p className="card-text">
                      <strong>Key Ingredients and Climate Impact: </strong>
                      {card.ingredients}
                    </p>
                    <p className="fw-bold">
                      <strong>Iconic Dishes:</strong>
                    </p>
                    <ul>
                      <li className="card-text">{card.dish_1}</li>
                      <li className="card-text">{card.dish_2}</li>
                      <li className="card-text">{card.dish_3}</li>
                    </ul>
                  </div>
                </div>
              ))}
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
    </div>
  );
};
export default Explore;
