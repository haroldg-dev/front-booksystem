import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; 
import { Header } from "../../components/Header/header";


interface LoginProps {
  onLoginSuccess: (isAuthenticated: boolean) => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      onLoginSuccess(true);
      navigate("/home");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <>
      <Header activeNav="book" />
    <div className="loginBody">
      <div className="login-container">
        <div className="login-right">
          <h2>LOGIN</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="login-button"
              onClick={handleLogin}
            >
              Login
            </button>
            <p>
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
