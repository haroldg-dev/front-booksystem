import { DateRange } from "@mui/icons-material";
import { Card } from "react-bootstrap";
import { Rating } from "../Rating/rating";

export interface Review {
  stars: number;
  content: string;
  author: string;
  date: string;
}

export function ReviewCard({ stars, content, author, date }: Review) {
  return (
    <Card className="m-auto" style={{ maxWidth: "500px" }}>
      <Card.Header>
        <Rating stars={stars} />
      </Card.Header>
      <Card.Body as="h4" className="text-center">
        <Card.Title>{content}</Card.Title>
        <Card.Text>
          {author} - {date}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
