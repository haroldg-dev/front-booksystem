import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign_up.css"; // Ensure the CSS file is properly linked
import { api } from "../../services/api";
import Alert from "@mui/material/Alert";
import { Header } from "../../components/Header/header";

//TO DO: Create User in the backend

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      return alert("Fill all the inputs");
    }

    if (password.length < 6) {
      return alert("Password must have at least 6 characters.");
    }

    //TODO: Confirm API is working - it seems to be connect but not responding
    api
      .post("/person", { firstName, lastName, email, password })
      .then((response) => {
        console.log(response);
        alert("Account created!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("It was not possible to create an account");
          console.dir(error.response);
        }
      });
  };

  return (
    <>
    <Header activeNav="book" />
    <div className="signUpBody">
      <div className="signUp-container">
        <div className="signUp-right">
          <h2>SIGN UP</h2>
          <form>
            <div className="input-group">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleSignUp}
            >
              Sign Up
            </button>
            <p>
              Already have an account? <a href="/login">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
