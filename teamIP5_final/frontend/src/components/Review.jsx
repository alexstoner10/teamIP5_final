import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    reviewText: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    getReviews();
  }, []);

  function getReviews() {
    fetch("http://127.0.0.1:8080/reviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching Menu:", error);
      });
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const url = "http://127.0.0.1:8080/addReviews";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add new Robot");
      }
      const result = await response.json();
      console.log("Success:", result);
      alert("Review submitted");
      setFormData({
        name: "",
        rating: "",
        reviewText: "",
      });

      getReviews();
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding Review");
    }
  };
  return (
    <div>
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
<div className="review-container">
        <div className="review-form">
          <br />
          <br />
          <h2>Reviews</h2>
          <hr className="featurette-divider"></hr>
          <p style={{ textAlign: "center", fontSize: "120%" }}>
            Please leave reviews! We love to hear your feedback, so we can
            improve your experience!
          </p>
          <form id="reviewForm" onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1rem",
              }}
            >
              <label htmlFor="name">Name:</label>
              <textarea
                id="name"
                name="name"
                required
                style={{ width: "30%", height: "40px", resize: "none" }}
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              ></textarea>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1rem",
              }}
            >
              <label htmlFor="ratingSelect">Rating:</label>
              <select
                id="ratingSelect"
                name="rating"
                required
                style={{ width: "30%", height: "40px", resize: "none" }}
                value={formData.rating}
                onChange={handleChange}
              >
                <option value="0">--Select Rating--</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            </div>
            <label htmlFor="reviewText">Your Review:</label>
            <textarea
              id="reviewText"
              name="reviewText"
              required
              value={formData.reviewText}
              onChange={handleChange}
            ></textarea>

            <br />
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
      <hr className="featurette-divider"></hr>
      {reviews.map((review) => (
        <div key={review._id} className="review-card mb-2">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {review.name}
          </h5>
          <p className="review-rating" style={{ textAlign: "center" }}>
            <strong>Rating:</strong> {"⭐".repeat(review.rating)}
          </p>
          <p className="review-text" style={{ textAlign: "center" }}>
            {review.reviewText}
          </p>
        </div>
      ))};
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
export default Review;
