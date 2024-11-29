import { useEffect, useRef, useState } from "react";
import { Review, ReviewCard } from "../ReviewCard/reviews_card";
import { Carousel } from "react-bootstrap";

//TODO: Create API for reviews

export function ReviewCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const carouselRef = useRef<any>(null); // Create a ref for the Carousel

const testReviews: Review[] = [
  {
    stars: 5,
    content:
      "The Deep Tissue Massage was incredible! The therapist worked out all my knots and I felt so much better afterwards. Highly recommend!",
    author: "Alice Johnson",
    date: "2024-10-01",
  },
  {
    stars: 4,
    content:
      "The Hot Stone Massage was relaxing, and the heat was soothing. I do wish the massage was a bit deeper, but overall, a great experience.",
    author: "Bob Smith",
    date: "2024-10-03",
  },
  {
    stars: 5,
    content:
      "I loved the Thai Massage! The stretches really helped with my flexibility, and the pressure points were spot on. I left feeling rejuvenated.",
    author: "Samantha Lee",
    date: "2024-10-05",
  },
  {
    stars: 3,
    content:
      "The Aromatherapy Massage was nice, but I was expecting a bit more intensity. The oils smelled amazing, though, and it was very calming.",
    author: "David Brown",
    date: "2024-10-08",
  },
  {
    stars: 5,
    content:
      "The Swedish Massage was absolutely perfect. It was the perfect balance of relaxation and tension relief. The environment was peaceful too.",
    author: "Emma White",
    date: "2024-10-10",
  },
  {
    stars: 4,
    content:
      "I had the Deep Tissue Massage and it was really effective. The therapist focused on my problem areas, though the pressure was a little too strong at times.",
    author: "Michael Harris",
    date: "2024-10-12",
  },
  {
    stars: 5,
    content:
      "I can't say enough good things about the Hot Stone Massage. It was the perfect combination of heat and pressure, and I felt completely relaxed after.",
    author: "Sophia Taylor",
    date: "2024-10-15",
  },
  {
    stars: 4,
    content:
      "The Thai Massage was unique and very effective. The therapist did a great job with the stretches, but I would have preferred a little more pressure.",
    author: "James Wilson",
    date: "2024-10-17",
  },
  {
    stars: 3,
    content:
      "The Aromatherapy Massage was relaxing, but it wasn't as deep as I hoped. It was a good experience, but I would go for something more intense next time.",
    author: "Olivia Martin",
    date: "2024-10-19",
  },
  {
    stars: 5,
    content:
      "I absolutely loved the Swedish Massage! The pressure was perfect, and I felt so pampered. I'll definitely be back for more!",
    author: "Lucas Clark",
    date: "2024-10-21",
  },
];

  useEffect(() => {
    // Set the reviews state on component mount
    setReviews(testReviews);

    // Manually start the carousel after setting reviews
    if (carouselRef.current) {
      carouselRef.current.next(); // Start with the next item
      const intervalId = setInterval(() => {
        carouselRef.current.next(); // Move to the next item every 3 seconds
      }, 3000); // 3000 milliseconds interval

      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }
  }, []);

  return (
    <>
      <Carousel
        interval={3000}
        pause="hover"
        controls={true}
        indicators={true}
        className="my-5"
        data-bs-theme="dark"
      >
        {reviews.map((review, index) => (
          <Carousel.Item key={index}>
            <ReviewCard
              stars={review.stars}
              content={review.content}
              author={review.author}
              date={review.date}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
