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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio, obcaecati laborum inventore error earum adipisci, numquam corporis cumque consectetur molestias maiores asperiores minima, sint quas. Ab dolores perferendis quia?",
      author: "Reviewer Name 1",
      date: "11/05/2024",
    },
    {
      stars: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio, obcaecati laborum inventore error earum adipisci, numquam corporis cumque consectetur molestias maiores asperiores minima, sint quas. Ab dolores perferendis quia?",
      author: "Reviewer Name 2",
      date: "11/05/2024",
    },
    {
      stars: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam optio, obcaecati laborum inventore error earum adipisci, numquam corporis cumque consectetur molestias maiores asperiores minima, sint quas. Ab dolores perferendis quia?",
      author: "Reviewer Name 3",
      date: "11/05/2024",
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
      <Carousel interval={3000} pause="hover" controls={true} indicators={true} className="my-5">
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
