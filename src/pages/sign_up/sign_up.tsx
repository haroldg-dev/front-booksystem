import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign_up.css";
import { api } from "../../services/api";
import Alert from "@mui/material/Alert";
import { Header } from "../../components/Header/header";
import { AuthContext } from "../../context/AuthContext";

interface Props {
  onCreatedAccount: (isCreated: boolean) => void;
}

function SignUp({ onCreatedAccount }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthenticated, setUserId } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phone || !password) {
      return alert("Fill all the inputs");
    }

    if (password.length < 6) {
      return alert("Password must have at least 6 characters.");
    }

    api
      .post("/person", { firstName, lastName, email, password, phone })
      .then((response) => {
        console.log(response);
        const userId = response.data.payload.userId;
        console.log(userId);
        alert("Account created!");
        setAuthenticated(true);
        setUserId(userId);
        onCreatedAccount(true);
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
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
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
