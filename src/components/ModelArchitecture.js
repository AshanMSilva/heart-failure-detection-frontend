import { Col, Container, Image, Row } from "react-bootstrap";
import highLevelArchitecture from "../assets/images/high-level-architecture.png";

export default function ModelArchitecture() {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col md={6}>
          <h3>Model Architecture</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. here', making it look like readable
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy.
          </p>
        </Col>
        <Col md={6}>
          <Image src={highLevelArchitecture} className="architecture-image" />
        </Col>
      </Row>
    </Container>
  );
}
