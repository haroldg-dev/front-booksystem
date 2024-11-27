import { DateRange } from "@mui/icons-material";
import { Rating } from "../Rating/rating";
import { Carousel } from "react-bootstrap";

export interface Review {
  stars: number;
  content: string;
  author: string;
  date: string;
}

export function ReviewCard({ stars, content, author, date }: Review) {
  return (
    <div
      className="d-flex justify-content-center align-items-center m-auto"
      style={{ minHeight: "200px", maxWidth: "500px" }}
    >
      <div className="text-center">
        <blockquote className="blockquote">
          <p className="mb-4">"{content}"</p>
          <footer className="blockquote-footer">
            {author} - {date}
          </footer>
        </blockquote>
      </div>
      <Carousel.Caption className="mt-3">
        <Rating stars={stars} />
      </Carousel.Caption>
    </div>
  );
}
