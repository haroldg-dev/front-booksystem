import { Form, Button } from "react-bootstrap";

export function Subscribe() {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <div className="d-flex flex-column align-items-center mb-4">
        <h4>Want to know when we have special combos?</h4>
        <h5>Subscribe to our newsletters</h5>
      </div>

      <Form>
        <Form.Group
          className="mb-3 d-flex justify-content-center gap-4"
          controlId="formBasicEmail"
        >
          <div className="">
            <Form.Control type="email" placeholder="you@example.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </div>
          <div className="">
            <Button variant="dark" type="submit">
              Subscribe
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
