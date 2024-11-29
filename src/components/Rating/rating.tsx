interface RatingProps {
  stars: number;
}

export function Rating({ stars }: RatingProps) {
  const filledStars = Math.min(Math.max(stars, 0), 5); // Clamp stars between 0 and 5
  const emptyStars = 5 - filledStars;

  return (
    <div>
      {[...Array(filledStars)].map((_, index) => (
        <i key={index} className="bi bi-star-fill text-warning"></i>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <i key={index} className="bi bi-star text-warning"></i>
      ))}
    </div>
  );
}
