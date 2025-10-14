import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MemberCard from "../components/MemberCard";
import ContactForm from "../components/ContactForm";
import ashanImg from "../assets/images/ashan.jpeg";
import chanukaImg from "../assets/images/chanuka.jpeg";
import piumikaImg from "../assets/images/piumika.jpeg";

const teamMembers = [
  {
    name: "Ashan Silva",
    major: "Computer Science",
    role: "Software Developer",
    indexNo: "21825242",
    image: ashanImg,
  },
  {
    name: "Piumika Perera",
    major: "Computer Science",
    role: "Software Developer",
    indexNo: "21673548",
    image: piumikaImg,
  },
  {
    name: "Chanuka Athalage",
    major: "Computer Science",
    role: "Software Developer",
    indexNo: "21953004",
    image: chanukaImg,
  },
];
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <Row className="mb-5">
        {teamMembers.map((member, idx) => (
          <Col key={idx} md={4} className="d-flex justify-content-center mb-4">
            <MemberCard member={member} />
          </Col>
        ))}
      </Row>

      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
