import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("Authorization failed. Please login first.");
    return <Navigate to="/signup" replace />;
  }

  const [menuItems, setMenuItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    product_name: "",
    price: "",
    description: "",
  });
  const [newItem, setNewItem] = useState({
    product_id: "",
    product_name: "",
    description: "",
    price: "",
    special_fact: "",
    image: "",
    cuisine: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  const handleEditClick = (item) => {
    setEditItemId(item._id);
    setEditFormData({
      product_name: item.product_name,
      price: item.price,
      description: item.description || ""
    });
  };

  const handleCancelClick = () => {
    setEditItemId(null);
    setEditFormData({ product_name: "", price: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = (id) => {
    fetch(`http://localhost:8080/menu/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_name: editFormData.product_name,
        price: parseFloat(editFormData.price),
        description: editFormData.description
      })
    })
      .then((res) => res.json())
      .then(() => {
        setMenuItems((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, ...editFormData, price: parseFloat(editFormData.price) } : item
          )
        );
        handleCancelClick();
      })
      .catch((err) => console.error("Error updating item:", err));
  };

  const handleDeleteClick = (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    fetch(`http://localhost:8080/menu/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => setMenuItems((prev) => prev.filter((item) => item._id !== id)))
      .catch((err) => console.error("Error deleting item:", err));
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddNewItem = () => {
    fetch("http://localhost:8080/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newItem,
        price: parseFloat(newItem.price)
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setMenuItems([...menuItems, data]);
        setNewItem({
          product_id: "",
          product_name: "",
          description: "",
          price: "",
          special_fact: "",
          image: "",
          cuisine: ""
        });
      })
      .catch((err) => console.error("Error adding item:", err));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand btn btn-link text-light" onClick={() => navigate("/")}>Global Bites</button>
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

        {/* Add New Item */}
        <div className="card mb-4">
          <div className="card-header">Add New Menu Item</div>
          <div className="card-body">
            {Object.keys(newItem).map((key) => (
              <div className="mb-2" key={key}>
                <input
                  className="form-control"
                  name={key}
                  value={newItem[key]}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  onChange={handleNewItemChange}
                />
              </div>
            ))}
            <button className="btn btn-success" onClick={handleAddNewItem}>Add Item</button>
          </div>
        </div>

        {/* Existing Items */}
        {menuItems.map((item) => (
          <div key={item._id} className="card mb-3">
            <div className="card-body">
              {editItemId === item._id ? (
                <>
                  <input name="product_name" value={editFormData.product_name} onChange={handleChange} className="form-control mb-2" placeholder="Name" />
                  <input name="price" type="number" value={editFormData.price} onChange={handleChange} className="form-control mb-2" placeholder="Price" />
                  <input name="description" value={editFormData.description} onChange={handleChange} className="form-control mb-2" placeholder="Description" />
                  <button className="btn btn-success me-2" onClick={() => handleSaveClick(item._id)}>Save</button>
                  <button className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
                </>
              ) : (
                <>
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">
                    Price: ${item.price} <br />
                    Description: {item.description || "N/A"}
                  </p>
                  <button className="btn btn-primary me-2" onClick={() => handleEditClick(item)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteClick(item._id)}>Delete</button>
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
