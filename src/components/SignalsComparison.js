import { Col, Container, Figure, Row } from "react-bootstrap";
import normal_signal from "../assets/images/normal_signal.png";
import preprocessed_signal from "../assets/images/preprocessed_signal.png";

export default function SignalsComparison() {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={12}>
          <h3>Signal Preprocessing</h3>
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
        </Col>
        <Col sm={12}>
          <Figure className="d-block mx-auto text-center mb-5">
            <Figure.Image src={normal_signal} clasName="image-width" />
            <Figure.Caption clasName="text-center">
              <strong>NORMAL SIGNAL</strong>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={12}>
          <Figure className="d-block mx-auto text-center">
            <Figure.Image src={preprocessed_signal} clasName="image-width" />
            <Figure.Caption clasName="text-center">
              <strong>PREPROCESSED SIGNAL</strong>
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
    </Container>
  );
}
