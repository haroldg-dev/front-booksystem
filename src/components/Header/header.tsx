import React from "react";
import { useNavigate } from "react-router-dom";

export interface HeaderProps {
  activeNav: string;
}

export function Header({ activeNav }: HeaderProps) {
  const navigate = useNavigate();

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

  // Inline CSS styles for the header and button
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

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    border: "none",
    cursor: "pointer",
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: "magenta", // HOVER COLOR
  };

  return (
    <nav className="navbar navbar-expand-sm" style={navbarStyle} data-bs-theme="light">
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
              <a
                className={`nav-link ${activeNav === "home" ? "active" : ""}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "services" ? "active" : ""}`}
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === "about" ? "active" : ""}`}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleSignInBtn}
              >
                Sign In
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-dark"
                type="button"
                onClick={handleRegisterBtn}
              >
                Register
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn book-btn"
                type="button"
                onClick={handleBookBtn}
                style={buttonStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "magenta")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#333")}
              >
                Book
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
