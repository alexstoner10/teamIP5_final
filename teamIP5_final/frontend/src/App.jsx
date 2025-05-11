import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from './components/Home.jsx';
import Menu from './components/Menu.jsx';
import Map from './components/Map.jsx';
import Explore from './components/Explore.jsx';
import Author from './components/Author.jsx';
import Review from './components/Review.jsx';
import Signup from './components/Signup.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import History from './components/History.jsx';
import Admin from './components/Admin.jsx';
import Confirmation from './components/Confirmation.jsx';
import "./App.css"

function App() {
  const [cart, setCart] = useState([]);

  const [orderHistory, setOrderHistory] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
        <Route path="/map" element={<Map />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/review" element={<Review />} />
        <Route path="/author" element={<Author />} />
        <Route path="/signup" element={<Signup loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} orderHistory={orderHistory} setOrderHistory={setOrderHistory} />} />
        <Route path="/confirmation" element={<Confirmation cart={cart} setCart={setCart} />} />
        <Route path="/order-history" element={<History orderHistory={orderHistory} />} />
        <Route path="/admin" element={<Admin loggedInUser={loggedInUser} />} />
      </Routes>
    </Router>
  );
};

export default App;

