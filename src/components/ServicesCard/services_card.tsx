import { useEffect, useState } from "react";
import "./services_card.css";
import { Link } from "react-router-dom";

//TODO: set img right or left if the services card even or odd

interface ServicesCardProps {
  imgSide: "left" | "right";
  name: string;
  description: string;
  duration: number;
  price: number;
  imgUrl: string;
}

export function ServicesCard({
  imgSide,
  name,
  description,
  duration,
  price,
  imgUrl,
}: ServicesCardProps) {
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
    <div className="container mb-2" style={{ maxWidth: "900px" }}>
      <div className="row py-3 px-5 border">
        <div
          className={`img_wrapper col-md-6 d-flex justify-content-center ${
            imgLeft ? "order-1" : "order-2"
          }`}
        >
          <img src={imgUrl} alt="" className="img-fluid img-thumbnail" />
        </div>
        <div
          className={`service_info_wrapper col-md-6 d-flex flex-column justify-content-center align-items-center ${
            imgLeft ? "order-1 order-md-2" : "order-2 order-md-1"
          }`}
        >
          <h3 className="mb-4">{name}</h3>
          <div className="service_details_wrapper d-flex flex-column align-items-center align-items-md-start mb-4">
            <p className="fw-bold text-md-start">Description:</p>
            <p className="fw-normal text-md-start">{description}</p>
            <p className="fw-bold">
              Duration: <span className="fw-normal">{duration} min</span>
            </p>
            <p className="fw-bold">
              Price: <span className="fw-normal">${price}</span>
            </p>
          </div>
          <div className="btn_wrapper">
            <button type="button" className="btn btn-dark mx-5 px-5">
              <Link to={"/book"} className="link-light text-decoration-none">
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
