import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import vanImage from "./assets/images/road-trip-van-cartoon-style-png.png";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={vanImage} alt="aboutImage" className="vanLife-image" />{" "}
            <p>VanLife</p>
          </div>
        </Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
