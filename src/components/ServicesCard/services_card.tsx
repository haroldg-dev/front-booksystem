import { useEffect, useState } from "react";
import "./services_card.css";

//TODO: set img right or left if the services card even or odd

interface ServicesCardProps {
  imgSide: "left" | "right";
}

export function ServicesCard({ imgSide }: ServicesCardProps) {
  const [imgLeft, setImgLeft] = useState(true);

  useEffect(() => {
    if (imgSide == "right") {
      setImgLeft(false);
    }

    if (imgSide == "left") {
      setImgLeft(true);
    }
  });
  return (
    <div className="container">
      <div className="row py-3 px-5 border">
        <div
          className={`img_wrapper col-6 d-flex justify-content-center ${
            imgLeft ? "order-1" : "order-2"
          }`}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f2864b6ee63644ee0b157d3/1632770146028-9GIGWC85SW4D73W1M42C/hot-stone-massage.jpg"
            alt=""
            className="img-fluid img-thumbnail"
          />
        </div>
        <div
          className={`service_info_wrapper col-6 d-flex flex-column justify-content-center ${
            imgLeft ? "order-2" : "order-1"
          }`}
        >
          <h3 className="mb-4">Hot Stone Massage</h3>
          <div className="service_details_wrapper d-flex flex-column align-items-start mb-4">
            <p className="fw-bold">
              Description: <span className="fw-normal">General Medicine</span>
            </p>
            <p className="fw-bold">
              Duration: <span className="fw-normal">60 min</span>
            </p>
            <p className="fw-bold">
              Price: <span className="fw-normal">$80</span>
            </p>
          </div>
          <div className="btn_wrapper">
            <button type="button" className="btn btn-outline-primary mx-5 px-5">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
