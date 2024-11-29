import { Button, Modal } from "react-bootstrap";
import { Service } from "../../pages/services/services";
import { Link } from "react-router-dom";

interface ServicesModalProps {
  show: boolean;
  onHide: () => void;
  service: Service; // Accept the service prop
}

export function ServicesModal({ show, onHide, service }: ServicesModalProps) {
  return (
    <Modal
      show={show} // Modal visibility controlled by show prop
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{
          background: "transparent",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          {service.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundImage: `url(${service.imgUrl})`, // Set the background image
          backgroundSize: "cover", // Ensure the background image covers the entire body
          backgroundPosition: "center", // Center the image
          color: "white", // Set text color to white for contrast
          padding: "2rem", // Add some padding to the body
          position: "relative",
        }}
      >
        <div className="overlay"></div>
        <div className="position-relative z-1">
          <p className="fs-3 text-start">{service.description}</p>
          <p className="fs-4 text-start">Price: ${service.price}</p>
          <p className="fs-4 text-start">
            Duration: All our services are 60 minutes
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-dark">
          <Link to={"/book"} className="link-light text-decoration-none">
            Book Now
          </Link>
        </Button>
        <Button onClick={onHide} className="btn-dark">
          Back to Services
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
