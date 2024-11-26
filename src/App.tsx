import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Login from "./pages/login/login";
import SignUp from "./pages/sign_up/sign_up";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Checkout from "./pages/checkout/checkout";
import Booking from "./pages/booking/booking";
import About from "./pages/about/about";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div id="root">
      <BrowserRouter>
        <div className="main-content">
          <Routes>
            <Route
              path="/login"
              element={<Login onLoginSuccess={() => setIsAuthenticated(true)} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/home"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/book"
              element={isAuthenticated ? <Booking /> : <Navigate to="/login" />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
