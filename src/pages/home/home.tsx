import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/header";
import "./home.css";
import { ServicesCard } from "../../components/ServicesCard/services_card";
import { ReviewCarousel } from "../../components/ReviewsCarousel/reviews_carousel";
import { Subscribe } from "../../components/Subscribe/subscribe";

function Home() {
  const navigate = useNavigate();

  // Navigate to services page
  function handleServicesBtn(e: React.MouseEvent) {
    e.preventDefault();
    navigate("/services");
  }

  // Navigate to booking page
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
                {/* Services Button */}
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleServicesBtn}
                >
                  Services
                </button>

                {/* First Book Now Button */}
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
        <ServicesCard imgSide="left" />
        <ServicesCard imgSide="right" />
      </section>
      <section id="reviews_carousel">
        <ReviewCarousel />
      </section>
      <section id="subscribe">
        <Subscribe />
      </section>
      <div className="container d-flex justify-content-center">
        <div className="row">
          {/* Second Book Now Button */}
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleBookBtn}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
