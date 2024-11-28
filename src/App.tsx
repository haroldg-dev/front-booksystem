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
import { AuthContext } from "./context/AuthContext";

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  console.log(authenticated);

  return (
    <div id="root">
      <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
        <BrowserRouter>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <Login onLoginSuccess={() => setAuthenticated(true)} />
                }
              />
              <Route
                path="/signup"
                element={
                  <SignUp
                    onCreatedAccount={(isCreated) =>
                      setAuthenticated(isCreated)
                    }
                  />
                }
              />
              {/* <Route
                path="/home"
                element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
              /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/book"
                element={authenticated ? <Booking /> : <Navigate to="/login" />}
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
