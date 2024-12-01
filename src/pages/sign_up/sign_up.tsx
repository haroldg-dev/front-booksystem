import { ChangeEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign_up.css";
import { api } from "../../services/api";
import { Header } from "../../components/Header/header";
import { AuthContext } from "../../context/AuthContext";
import { Button, Form, Modal } from "react-bootstrap";

interface Props {
  onCreatedAccount: (isCreated: boolean) => void;
}

function SignUp({ onCreatedAccount }: Props) {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { setAuthenticated, setUserId } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    setFirstNameError(""); // Clear the error when the user starts typing
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setLastNameError(""); // Clear the error when the user starts typing
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(""); // Clear the error when the user starts typing
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
    setPhoneError(""); // Clear the error when the user starts typing
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError(""); // Clear the error when the user starts typing
  };

  const validatePhone = (phone: string) => {
    // Basic phone number validation: Check for 10 digits (simple example, can be extended for international validation)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName) {
      setEmailError("First name is required.");
      return;
    }

    if (!lastName) {
      setEmailError("Last name is required.");
      return;
    }

    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    if (!phone) {
      setEmailError("Phone Number is required.");
      return;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Please enter a valid phone number (10 digits).");
      return;
    }

    if (!password) {
      setPasswordError("Password is required.");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must have at least 6 characters.");
      return;
    }

    api
      .post("/person", { firstName, lastName, email, password, phone })
      .then((response) => {
        console.log(response);
        const userId = response.data.payload.userId;
        console.log(userId);
        setShowModal(true);
        setAuthenticated(true);
        setUserId(userId);
        onCreatedAccount(true);
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
            <Form
              onSubmit={handleSignUp}
              className="mt-5 d-flex flex-column gap-3"
            >
              <Form.Group controlId="formSignUp">
                <Form.Label className="fw-bold">First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  isInvalid={!!firstNameError}
                  onChange={handleFirstNameChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {firstNameError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSignUp">
                <Form.Label className="fw-bold">Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  isInvalid={!!lastNameError}
                  onChange={handleLastNameChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {lastNameError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSignUp">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  isInvalid={!!emailError}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSignUp">
                <Form.Label className="fw-bold">Phone Number</Form.Label>
                <Form.Control
                  type="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  isInvalid={!!phoneError}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {phoneError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formSignUp">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  isInvalid={!!passwordError}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="dark" type="submit" className="mt-4">
                Sign Up
              </Button>
            </Form>
            <p>
              Already have an account? <a href="/login">Log In</a>
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You have successfully created your account. Now you can book our
            services and enjoy our offerings.
          </p>
          <p>
            To get started, simply browse through our services and choose what
            suits you best!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
