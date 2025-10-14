import { Card } from "react-bootstrap";

export default function MemberCard({ member }) {
  return (
    <Card style={{ width: "18rem", textAlign: "center" }} className="shadow-sm">
      <Card.Img
        variant="top"
        src={member.image}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          margin: "15px auto",
        }}
      />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>
          <strong>Major:</strong> {member.major}
        </Card.Text>
        <Card.Text>
          <strong>Role:</strong> {member.role}
        </Card.Text>
        <Card.Text>
          <strong>Index No:</strong> {member.indexNo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
