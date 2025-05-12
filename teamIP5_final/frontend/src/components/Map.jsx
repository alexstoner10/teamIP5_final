import React from "react";
import { useNavigate } from "react-router-dom";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import frenchfoods from '../assets/mapimages/frenchfoods.jpg';
import italianfoods from '../assets/mapimages/italianfoods.jpeg';
import japanesefoods from '../assets/mapimages/japanesefoods.jpg';
import mexicanfoods from '../assets/mapimages/mexicanfoods.jpg';
import restaurant from '../assets/mapimages/restaurant.jpg';
import turkishfoods from '../assets/mapimages/turkishfoods.jpg';

const Map = () => {
  let navigate = useNavigate();

  return (
    <div>
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

      <div className="container mt-4">
        <h1 className="text-center mb-4">Discover Global Dishes Through Our Interactive Map</h1>

        <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[41.8719, 12.5674]}>
            <Popup>
            🍕 Italy <br />
            Rich flavors, pasta, pizza, olive oil, and cheese <br />
            <button onClick={() => navigate('/menu')}>Learn More</button>
            </Popup>
        </Marker>

        <Marker position={[38.9637, 35.2433]}>
            <Popup>
            🍢 Turkey <br />
            Bold spices, kebabs, baklava, meze, and yogurt-based dishes <br />
            <button onClick={() => navigate('/menu')}>Learn More</button>
            </Popup>
        </Marker>

        <Marker position={[36.2048, 138.2529]}>
            <Popup>
            🍣 Japan <br />
            Fresh seafood, sushi, umami, delicate presentation, and rice <br />
            <button onClick={() => navigate('/menu')}>Learn More</button>
            </Popup>
        </Marker>

        <Marker position={[23.6345, -102.5528]}>
            <Popup>
            🌮 Mexico <br />
            Spicy, tacos, corn, beans, vibrant flavors, and salsas <br />
            <button onClick={() => navigate('/menu')}>Learn More</button>
            </Popup>
        </Marker>

        <Marker position={[46.2276, 2.2137]}>
            <Popup>
            🥖 France <br />
            Elegant, buttery, pastries, wine, cheese, and haute cuisine <br />
            <button onClick={() => navigate('/menu')}>Learn More</button>
            </Popup>
        </Marker>
        </MapContainer>
      
        <hr className="featurette-divider" />
        <div className="row featurette">
        <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Italian</h2>
            <p className="lead">Italian cuisine is deeply rooted in tradition, emphasizing fresh, high-quality ingredients and simple yet flavorful dishes. Meals are a social experience, often enjoyed with family and friends over multiple courses, with pasta, pizza, olive oil, and wine playing central roles. Regional diversity is key, with Northern Italy favoring creamy sauces and risottos, while the South leans toward tomato-based dishes and seafood.</p>
            <button className="btn btn-primary" onClick={() => navigate("/explore")}>Learn More</button>
        </div>
        <div className="col-md-5">
            <img src={italianfoods} alt="italianfoods" className="img-fluid rounded" />
        </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
        <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Turkish</h2>
            <p className="lead">Turkish cuisine is a fusion of Central Asian, Middle Eastern, and Mediterranean influences, known for its bold spices, rich meats, and flavorful vegetarian dishes. It’s deeply tied to hospitality, with meals often served as a shared experience featuring meze (small appetizers), kebabs, and traditional desserts like baklava. From the street food of Istanbul to the home-cooked stews of Anatolia, Turkish food reflects the country’s diverse history and vibrant social culture.</p>
            <button className="btn btn-primary" onClick={() => navigate("/explore")}>Learn More</button>
        </div>
        <div className="col-md-5 order-md-1">
            <img src={turkishfoods} alt="turkishfoods" className="img-fluid rounded" />
        </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
        <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Japanese</h2>
            <p className="lead">Japanese cuisine values balance, seasonality, and precision, with a strong emphasis on fresh ingredients and umami-rich flavors. Dishes like sushi, ramen, and tempura reflect centuries-old traditions, often prepared with meticulous attention to detail. The cultural approach to food is deeply respectful, with concepts like washoku (harmony in food) and omotenashi (hospitality) shaping both home cooking and dining experiences.</p>
            <button className="btn btn-primary" onClick={() => navigate("/explore")}>Learn More</button>
        </div>
        <div className="col-md-5">
            <img src={japanesefoods} alt="japanesefoods" className="img-fluid rounded" />
        </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
        <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Mexican</h2>
            <p className="lead">Mexican cuisine is a lively blend of indigenous Mesoamerican and Spanish influences, known for its bold flavors, use of corn, beans, and chili peppers, and communal dining traditions. Food plays a central role in cultural celebrations, from street tacos to elaborate dishes like mole prepared for special occasions. Each region has its own specialties, with coastal areas emphasizing fresh seafood, while central regions are known for hearty stews and tamales.</p>
            <button className="btn btn-primary" onClick={() => navigate("/explore")}>Learn More</button>
        </div>
        <div className="col-md-5 order-md-1">
            <img src={mexicanfoods} alt="mexicanfoods" className="img-fluid rounded" />
        </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
        <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">French</h2>
            <p className="lead">French cuisine is synonymous with elegance and refinement, built on a foundation of rich sauces, artisanal bread, cheese, and fine wine. It is deeply intertwined with French culture, where food is not just sustenance but an art form, with long meals and carefully crafted courses. From rustic countryside dishes like coq au vin to the haute cuisine of Paris, French food celebrates technique, seasonality, and a love for indulgence.</p>
            <button className="btn btn-primary" onClick={() => navigate("/explore")}>Learn More</button>
        </div>
        <div className="col-md-5">
            <img src={frenchfoods} alt="frenchfoods" className="img-fluid rounded" />
        </div>
        </div>

        <hr className="featurette-divider" />
        <div className="row featurette">
        <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Many More</h2>
            <p className="lead">Learn more about diverse global cuisines, their unique flavors, and cultural significance.</p>
            <button className="btn btn-primary" onClick={() => navigate("/explore")}>Learn More</button>
        </div>
        <div className="col-md-5 order-md-1">
            <img src={restaurant} alt="restaurant" className="img-fluid rounded" />
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

export default Map;