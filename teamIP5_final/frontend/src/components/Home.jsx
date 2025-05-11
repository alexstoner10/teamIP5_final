import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import kebab from '../assets/homeimages/kebab.jpg';
import pancake from '../assets/homeimages/pancake.jpg';
import steak from '../assets/homeimages/steak.jpg';
import waiterfood from '../assets/homeimages/waiterfood.jpg';
import iskender from '../assets/homeimages/iskender.jpg';
import doner from '../assets/homeimages/doner.jpg';

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand btn btn-link text-decoration-none text-light" onClick={() => navigate("/")}>Global Bites</button>
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

      {/* Carousel */}
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={kebab} alt="kebab" style={{ height: "750px", objectFit: "cover"}} />
          <Carousel.Caption className="text-start">
            <h1>Global Bites: Delicious International Meals</h1>
            <p>Explore our diverse menu featuring flavorful dishes from around the world. Check out our pricing and offerings to find your next favorite meal!</p>
            <Button variant="primary" size="lg" onClick={() => navigate("/menu")}>Menu</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={pancake} alt="pancake" style={{ height: "750px", objectFit: "cover"}} />
          <Carousel.Caption>
            <h1>Global Bites: From All Over the World</h1>
            <p>Take a journey through global cuisine with our interactive map! Discover dishes by region and connect with the cultures behind them.</p>
            <Button variant="primary" size="lg" onClick={() => navigate("/map")}>Map</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={steak} alt="steak" style={{ height: "750px", objectFit: "cover"}} />
          <Carousel.Caption className="text-end">
            <h1>Global Bites: Blending Worldwide Cultures</h1>
            <p>Dive into the rich history and cultural significance of our menu items. Learn how food connects people and traditions across the globe!</p>
            <Button variant="primary" size="lg" onClick={() => navigate("/explore")}>Explore</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sections */}
      <div className="container marketing mt-5">
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Food Brings Us Together</h2>
            <p className="lead">Food is a universal language that brings people together, preserving traditions and building community. Recipes passed down through generations keep history alive, while sharing meals fosters connection and cultural appreciation. Whether through family dinners or festive celebrations, food transcends borders, creating moments of unity.</p>
            <ul className="lead">
              <li>🥘 Food strengthens relationships, whether through family dinners or festive gatherings.</li>
              <li>🥘 Recipes passed down through generations keep traditions and history alive.</li>
              <li>🥘 Sharing meals fosters cultural appreciation and deepens connections.</li>
              <li>🥘 Global cuisine showcases the diversity of flavors and traditions worldwide.</li>
            </ul>
          </div>
          <div className="col-md-5">
            <img src={waiterfood} alt="waiterfood" style={{ width: "100%", height: "500px", borderRadius: "21px" }} />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Importance of Understanding</h2>
            <p className="lead">Exploring foods from different cultures expands our understanding of the world, fostering appreciation and respect for diverse traditions. Trying new cuisines introduces us to unique flavors, stories, and ways of life, creating connections beyond our own experiences. By learning about global dishes, we celebrate cultural diversity and recognize the shared humanity found in every meal.</p>
            <ul className="lead">
              <li>🥘 Food serves as a gateway to cultural exploration and global awareness.</li>
              <li>🥘 Different cuisines tell stories of history, geography, and social traditions.</li>
              <li>🥘 Experiencing diverse meals helps bridge cultural gaps and eliminate stereotypes.</li>
              <li>🥘 Learning about international foods enhances appreciation for global diversity.</li>
            </ul>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={iskender} alt="iskender" style={{ width: "100%", height: "500px", borderRadius: "21px" }} />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Join Us At Global Bites</h2>
            <p className="lead">At Global Bites, we believe food is a gateway to experiencing and appreciating cultures from around the world. Our menu features a diverse selection of international dishes, allowing you to explore new flavors and traditions with every bite. Whether you're craving a familiar favorite or eager to try something new, our interactive map makes it fun and easy to discover meals from different regions. Take a culinary journey across the globe and let Global Bites introduce you to the tastes and stories behind every dish. Check out our menu and start exploring today!</p>
            <ul className="lead">
              <li>🥘 Discover a carefully curated menu of international dishes and regional specialties.</li>
              <li>🥘 Use our interactive map to navigate through global cuisines.</li>
              <li>🥘 Enjoy a unique blend of flavors while learning the stories behind them.</li>
            </ul>
          </div>
          <div className="col-md-5">
            <img src={doner} alt="doner" style={{ width: "100%", height: "500px", borderRadius: "21px" }} />
          </div>
        </div>

        <hr className="featurette-divider" />
      </div>

      {/* Footer */}
      <footer className="container-fluid bg-dark text-light py-4">
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Global Bites, Inc. &#8226; <a href="#" className="text-light">Back to top</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
