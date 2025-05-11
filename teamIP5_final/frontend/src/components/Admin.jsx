import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Authorization failed. Please login first.");
    return <Navigate to="/signup" replace />;
  }

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Pizza", price: 10, description: "Delicious cheese pizza" },
    { id: 2, name: "Sushi", price: 15, description: "Fresh sushi platter" },
    { id: 3, name: "Burger", price: 8, description: "Juicy beef burger" },
  ]);

  const [editItemId, setEditItemId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const handleEditClick = (item) => {
    setEditItemId(item.id);
    setEditFormData({
      name: item.name,
      price: item.price,
      description: item.description,
    });
  };

  const handleCancelClick = () => {
    setEditItemId(null);
    setEditFormData({ name: "", price: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = (id) => {
    const updatedItems = menuItems.map((item) =>
      item.id === id
        ? { ...item, ...editFormData, price: parseFloat(editFormData.price) }
        : item
    );
    console.log("PUT → update item in state", updatedItems);
    setMenuItems(updatedItems);
    setEditItemId(null);
    setEditFormData({ name: "", price: "", description: "" });
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const updatedItems = menuItems.filter((item) => item.id !== id);
      console.log("DELETE → remove item from state", id);
      setMenuItems(updatedItems);
    }
  };

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
        <h2 className="text-center mb-4">Admin Edit Page</h2>

        {menuItems.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              {editItemId === item.id ? (
                <>
                  <input
                    name="name"
                    value={editFormData.name}
                    onChange={handleChange}
                    className="form-control mb-2"
                    placeholder="Name"
                  />
                  <input
                    name="price"
                    type="number"
                    value={editFormData.price}
                    onChange={handleChange}
                    className="form-control mb-2"
                    placeholder="Price"
                  />
                  <input
                    name="description"
                    value={editFormData.description}
                    onChange={handleChange}
                    className="form-control mb-2"
                    placeholder="Description"
                  />
                  <button
                    className="btn btn-success me-2"
                    onClick={() => handleSaveClick(item.id)}
                  >
                    Save
                  </button>
                  <button className="btn btn-secondary" onClick={handleCancelClick}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Price: ${item.price} <br />
                    Description: {item.description}
                  </p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
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

export default Admin;
