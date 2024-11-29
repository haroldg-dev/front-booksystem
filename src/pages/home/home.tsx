import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/header";
import "./home.css";
import { ServicesCard } from "../../components/ServicesCard/services_card";
import { ReviewCarousel } from "../../components/ReviewsCarousel/reviews_carousel";
import { Subscribe } from "../../components/Subscribe/subscribe";
import { duration } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  const dummyCombos = [
    {
      name: "Pain Relief Combo",
      description:
        "Deep Tissue and Hot Stone Massage work together to release muscle tension and ease pain.",
      services: [
        { name: "Deep Tissue Massage", price: 80, duration: 60 },
        { name: "Hot Stone Massage", price: 95, duration: 60 },
      ],
      price: 175, // Total price before discount
      discountedPrice: 166.25, // 5% discount applied (175 - 175 * 0.05)
      imgUrl:
        "https://movie-media-bucket-sofia.s3.us-east-2.amazonaws.com/Thai-massage.jpg",
    },
    {
      name: "Ultimate Relaxation Combo",
      description:
        "A complete relaxation package with Aromatherapy, Swedish, and Hot Stone Massage.",
      services: [
        { name: "Aromatherapy Massage", price: 85, duration: 60 },
        { name: "Swedish Massage", price: 70, duration: 60 },
        { name: "Hot Stone Massage", price: 95, duration: 60 },
      ],
      price: 250, // Total price before discount
      discountedPrice: 225, // 10% discount applied (250 - 250 * 0.10)
      imgUrl:
        "https://movie-media-bucket-sofia.s3.us-east-2.amazonaws.com/deep-tissue-massage.jpg",
    },
  ];

  function handleServicesBtn(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/services");
  }

  function handleBookBtn(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/book");
  }

  return (
    <>
      <Header activeNav="home" />
      <section id="main_hero" className="d-flex justify-content-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="z-1 position-relative d-flex flex-column justify-content-center p-5">
              <div className="heading_wrapper mb-5">
                <h1 className="text-white text-center">Paradise Lagoon Spa</h1>
                <h4 className="text-center text-light">Vancouver</h4>
              </div>
              <div className="button_wrapper d-flex justify-content-center gap-4">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleServicesBtn}
                >
                  Services
                </button>

                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleBookBtn}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services_section">
        <h3 className="text-center m-5">Special Offers</h3>
        {dummyCombos.map((combo, index) => (
          <ServicesCard
            key={index}
            imgSide={index % 2 === 0 ? "left" : "right"}
            name={combo.name}
            description={combo.description}
            duration={combo.services.reduce(
              (acc, service) => acc + service.duration,
              0
            )} // Summing up all services' durations
            price={combo.discountedPrice} // Assuming the discounted price is calculated earlier
            imgUrl={combo.imgUrl}
          />
        ))}
      </section>
      <section id="reviews_carousel">
        <ReviewCarousel />
      </section>
      <section id="subscribe" className="mb-5">
        <Subscribe />
      </section>
    </>
  );
}

export default Home;
