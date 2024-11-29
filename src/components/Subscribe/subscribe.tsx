import { ChangeEvent, FormEvent, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

export function Subscribe() {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State to manage the email input and form validation
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Handle email input change
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(""); // Clear the error when the user starts typing
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Email validation: check if email is empty or invalid
    if (!email) {
      setEmailError("Email is required.");
      return;
    }

    // Simple email regex for validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // If validation passes, show the modal
    setShowModal(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEmail(""); // Reset the email field
  };

  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="d-flex flex-column align-items-center mb-4">
        <h4>Want to know when we have special combos?</h4>
        <h5>Subscribe to our newsletters</h5>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex justify-content-center gap-4"
          controlId="formBasicEmail"
        >
          <div className="">
            <Form.Control
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={handleEmailChange}
              isInvalid={!!emailError} // If there's an error, show the invalid style
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            {/* Display error message if email is invalid */}
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </div>
          <div className="">
            <Button variant="dark" type="submit">
              Subscribe
            </Button>
          </div>
        </Form.Group>
      </Form>

      {/* Success Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Subscription Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have successfully subscribed to our newsletter. Thank you!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
