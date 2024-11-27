import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./header.css";
import { useUserContext } from "../../context/AuthContext";

export interface HeaderProps {
  activeNav: string;
}

export function Header({ activeNav }: HeaderProps) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isAuthenticated = useUserContext();

  function handleSignInBtn(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/login");
  }

  function handleRegisterBtn(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/signup");
  }

  function handleBookBtn(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/book");
  }

  function handleServicesClick() {
    // Navigate to the services page
    navigate("/services");
  }

  function handleAboutClick() {
    // Navigate to the about page
    navigate("/about");
  }

  const linkStyle: React.CSSProperties = {
    color: "#000",
    padding: "8px 20px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  const navbarStyle: React.CSSProperties = {
    position: "sticky",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    width: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    padding: "10px 0",
    marginBottom: "20px",
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-sm"
      style={navbarStyle}
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5 align-items-center gap-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className={`btn ${activeNav === "home" ? "active" : ""}`}
                style={{
                  ...linkStyle,
                  color: activeNav === "home" ? "grey" : "#333",
                  fontWeight: activeNav === "home" ? "bold" : "normal",
                  textDecoration: activeNav === "home" ? "underline" : "none",
                }}
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnter} // Only Services button triggers dropdown
              onMouseLeave={handleMouseLeave} // Only Services button triggers dropdown
            >
              <button
                className={`btn ${activeNav === "services" ? "active" : ""}`}
                style={{
                  ...linkStyle,
                  color: activeNav === "services" ? "grey" : "#333",
                  fontWeight: activeNav === "services" ? "bold" : "normal",
                  textDecoration:
                    activeNav === "services" ? "underline" : "none",
                }}
                onClick={handleServicesClick}
              >
                Services
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu" style={{ display: "block" }}>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services/swedish-massage"
                    >
                      Swedish Massage
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services/deep-tissue-massage"
                    >
                      Deep Tissue Massage
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services/hot-stone-massage"
                    >
                      Hot Stone Massage
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/services/aromatherapy-massage"
                    >
                      Aromatherapy Massage
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/services/thai-massage">
                      Thai Massage
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <button
                className="btn book-btn"
                type="button"
                onClick={handleBookBtn}
                style={{
                  ...linkStyle,
                  color: activeNav === "book" ? "grey" : "#333",
                  fontWeight: activeNav === "book" ? "bold" : "normal",
                  textDecoration: activeNav === "book" ? "underline" : "none",
                }}
              >
                Book
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn"
                style={{
                  ...linkStyle,
                  color: activeNav === "about" ? "grey" : "#333",
                  fontWeight: activeNav === "about" ? "bold" : "normal",
                  textDecoration: activeNav === "about" ? "underline" : "none",
                }}
                onClick={handleAboutClick}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn"
                style={{
                  ...buttonStyle,
                  display: isAuthenticated ? "none" : "inline-block",
                }}
                onClick={handleSignInBtn}
              >
                Sign In
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn"
                style={{
                  ...buttonStyle,
                  display: isAuthenticated ? "inline-block" : "none",
                }}
                onClick={handleSignInBtn}
              >
                Sing Out
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn"
                style={{
                  ...buttonStyle,
                  display: isAuthenticated ? "none" : "inline-block",
                }}
                onClick={handleRegisterBtn}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
