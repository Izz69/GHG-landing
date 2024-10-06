import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function DevCard({ pfp, name, designation, email, linkedin }) {
  return (
    <>
      <Card style={{ width: "22rem",
        height:"auto"
       }}>
        <Card.Img variant="top" src={pfp} style={{ height: "50%", objectFit: "cover" }} />
        <Card.Body>
          <Card.Title>{name} ({designation})</Card.Title>
          <Card.Text>{email}</Card.Text>
          <a href={linkedin}>
            <Button variant="primary" style={{ marginBottom: 0 }}>Contact</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
}