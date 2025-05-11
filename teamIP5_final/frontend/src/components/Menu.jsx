import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ragu from "../assets/images/ragu.jpg";

const Menu = ({ cart, setCart }) => {
  const [dishes, setMenu] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    getMenu();
  }, []);

  function getMenu() {
    fetch("http://127.0.0.1:8080/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenu(data);
      })
      .catch((error) => {
        console.error("Error fetching Menu:", error);
      });
  }
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function showFact(button, fact) {
    let card = button.parentElement;

    if (!card.querySelector(".special-fact")) {
      let factText = document.createElement("p");
      factText.classList.add("special-fact");
      factText.innerText = fact;
      card.appendChild(factText);
    }
  }

  const addToCart = (item) => {
    for (let dish of cart) {
      if (dish.product_id === item.product_id) {
        dish.quantity += 1;
        setCart([...cart]);
        return;
      }
    }
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const turkishDishes = dishes.filter((dish) => dish.cuisine === "turkish");
  const italianDishes = dishes.filter((dish) => dish.cuisine === "italian");
  const frenchDishes = dishes.filter((dish) => dish.cuisine === "french");
  const japaneseDishes = dishes.filter((dish) => dish.cuisine === "japanese");
  const mexicanDishes = dishes.filter((dish) => dish.cuisine === "mexican");

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
        <div className="container my-5" id="intro">
          <br />
          <div className="p-5 text-center bg-body-tertiary rounded-3">
            <h1 style={{ fontFamily: "serif" }}>Global Bites Menu</h1>
            <img
              src={ragu}
              alt="ragu"
              style={{
                width: "65%",
                height: "50%",
                borderRadius: "21px 21px 0 0",
              }}
            />
          </div>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      <p id="introParagraph">
        Enjoy the amazing flavors our menu has to offer. We hope you are
        transported around the world with every bite.
      </p>
      <header>
        <nav>
          <ul id="foodUl">
            <li id="foodList">
              <button onClick={() => scrollToSection("italian")}>
                Italian
              </button>
            </li>
            <li id="foodList">
              <button onClick={() => scrollToSection("turkish")}>
                Turkish
              </button>
            </li>
            <li id="foodList">
              <button onClick={() => scrollToSection("japanese")}>
                Japanese
              </button>
            </li>
            <li id="foodList">
              <button onClick={() => scrollToSection("mexican")}>
                Mexican
              </button>
            </li>
            <li id="foodList">
              <button onClick={() => scrollToSection("french")}>French</button>
            </li>
          </ul>
        </nav>
      </header>
      <hr className="featurette-divider"></hr>
      <section id="italian">
        <div className="my-3">
          <div className="p-3 text-center bg-body-tertiary">
            <div className="container py-3">
              <h1 className="text-body-emphasis">Italian</h1>
              <p className="col-lg-8 mx-auto">
                Indulge in the rich flavors of Italy, from hand-crafted pasta to
                wood-fired delights.
              </p>
              <div className="row" id="menu-container"></div>
            </div>
          </div>
        </div>
      </section>
      {italianDishes.map((dish) => (
        <div
          key={dish.product_id}
          className="card shadow-sm"
          style={{ backgroundColor: "rgb(221, 214, 206)" }}
        >
          <br />
          <img
            src={dish.image}
            alt={dish.product_name}
            style={{
              width: "25%",
              height: "auto",
              borderRadius: "30px",
              display: "block",
              margin: "auto",
            }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <br />
            <h5 className="card-title">{dish.product_name}</h5>
            <p className="card-text">{dish.description}</p>
            <p className="fw-bold">Price: ${dish.price}</p>
            <button
              className="btn btn-primary  me-2"
              onClick={(e) => showFact(e.target, dish.special_fact)}
            >
              Fun Fact
            </button>
            <button className="btn btn-primary" onClick={() => addToCart(dish)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      <section id="turkish">
        <div className="my-3">
          <div className="p-3 text-center bg-body-tertiary">
            <div className="container py-3">
              <h1 className="text-body-emphasis">Turkish</h1>
              <p className="col-lg-8 mx-auto">
                Experience the bold and aromatic spices of Turkey, where
                centuries-old culinary heritage meets mouthwatering kebabs and
                sweet baklava.
              </p>
              <div className="row" id="menu-container"></div>
            </div>
          </div>
        </div>
      </section>

      {turkishDishes.map((dish) => (
        <div
          key={dish.product_id}
          className="card shadow-sm"
          style={{ backgroundColor: "rgb(221, 214, 206)" }}
        >
          <br />
          <img
            src={dish.image}
            alt={dish.product_name}
            style={{
              width: "25%",
              height: "auto",
              borderRadius: "30px",
              display: "block",
              margin: "auto",
            }}
          />
          <div className="card-body" style={{textAlign: "center"}}>
            <br />
            <h5 className="card-title">{dish.product_name}</h5>
            <p className="card-text">{dish.description}</p>
            <p className="fw-bold">Price: ${dish.price}</p>
            <button
              className="btn btn-primary  me-2"
              onClick={(e) => showFact(e.target, dish.special_fact)}
            >
              Fun Fact
            </button>
            <button className="btn btn-primary" onClick={() => addToCart(dish)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      <section id="japanese">
        <div className="my-3">
          <div className="p-3 text-center bg-body-tertiary">
            <div className="container py-3">
              <h1 className="text-body-emphasis">Japanese</h1>
              <p className="col-lg-8 mx-auto">
                Savor the delicate balance of flavors in Japanese cuisine, from
                fresh sushi and umami-rich ramen to delicious Wagashi and
                beyond.
              </p>
              <div className="row" id="menu-container"></div>
            </div>
          </div>
        </div>
      </section>
      {japaneseDishes.map((dish) => (
        <div
          key={dish.product_id}
          className="card shadow-sm"
          style={{ backgroundColor: "rgb(221, 214, 206)" }}
        >
          <br />
          <img
            src={dish.image}
            alt={dish.product_name}
            style={{
              width: "25%",
              height: "auto",
              borderRadius: "30px",
              display: "block",
              margin: "auto",
            }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <br />
            <h5 className="card-title">{dish.product_name}</h5>
            <p className="card-text">{dish.description}</p>
            <p className="fw-bold">Price: ${dish.price}</p>
            <button
              className="btn btn-primary  me-2"
              onClick={(e) => showFact(e.target, dish.special_fact)}
            >
              Fun Fact
            </button>
            <button className="btn btn-primary" onClick={() => addToCart(dish)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      <section id="mexican">
        <div className="my-3">
          <div className="p-3 text-center bg-body-tertiary">
            <div className="container py-3">
              <h1 className="text-body-emphasis">Mexican</h1>
              <p className="col-lg-8 mx-auto">
                Dive into the vibrant tastes of Mexico, where zesty salsas,
                slow-cooked meats, and handmade tortillas bring every dish to
                life.
              </p>
              <div className="row" id="menu-container"></div>
            </div>
          </div>
        </div>
      </section>
      {mexicanDishes.map((dish) => (
        <div
          key={dish.product_id}
          className="card shadow-sm"
          style={{ backgroundColor: "rgb(221, 214, 206)" }}
        >
          <br />
          <img
            src={dish.image}
            alt={dish.product_name}
            style={{
              width: "25%",
              height: "auto",
              borderRadius: "30px",
              display: "block",
              margin: "auto",
            }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <br />
            <h5 className="card-title">{dish.product_name}</h5>
            <p className="card-text">{dish.description}</p>
            <p className="fw-bold">Price: ${dish.price}</p>
            <button
              className="btn btn-primary  me-2"
              onClick={(e) => showFact(e.target, dish.special_fact)}
            >
              Fun Fact
            </button>
            <button className="btn btn-primary" onClick={() => addToCart(dish)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
      <section id="french">
        <div className="my-3">
          <div className="p-3 text-center bg-body-tertiary">
            <div className="container py-3">
              <h1 className="text-body-emphasis">French</h1>
              <p className="col-lg-8 mx-auto">
                Treat yourself to the elegance of French cuisine, with complex
                flavors, decadent sauces, and timeless classics that embody the
                art of fine dining.
              </p>
              <div className="row" id="menu-container"></div>
            </div>
          </div>
        </div>
      </section>
      {frenchDishes.map((dish) => (
        <div
          key={dish.product_id}
          className="card shadow-sm"
          style={{ backgroundColor: "rgb(221, 214, 206)" }}
        >
          <br />
          <img
            src={dish.image}
            alt={dish.product_name}
            style={{
              width: "25%",
              height: "auto",
              borderRadius: "30px",
              display: "block",
              margin: "auto",
            }}
          />
          <div className="card-body" style={{ textAlign: "center" }}>
            <br />
            <h5 className="card-title">{dish.product_name}</h5>
            <p className="card-text">{dish.description}</p>
            <p className="fw-bold">Price: ${dish.price}</p>
            <button
              className="btn btn-primary  me-2"
              onClick={(e) => showFact(e.target, dish.special_fact)}
            >
              Fun Fact
            </button>
            <button className="btn btn-primary" onClick={() => addToCart(dish)}>
              Add To Cart
            </button>
          </div>
        </div>
      ))}
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
export default Menu;
