import { Card, Button } from "react-bootstrap";

const MeetingCard = ({meeting}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{meeting.concept}</Card.Title>
          <Card.Text>
            {meeting.startTime}
            <br />
            {new Date(meeting.date).toLocaleDateString()}
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MeetingCard;
