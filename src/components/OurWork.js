import { Button, Col, Container, Image, Row } from "react-bootstrap";
import piechart from "../assets/images/piechart.png";
import heartrate from "../assets/images/heartrate.jpg";
import ecg_detailed from "../assets/images/ecg_detailed.jpg";
import { useState } from "react";
import PredictionForm from "./PredictionForm";

export default function OurWork() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={3} lg={2}>
          <Image src={piechart} className="fit-image" rounded />
        </Col>
        <Col sm={6} lg={8}>
          <h3>Our Work</h3>
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
        <Col sm={3} lg={2}>
          <Image src={ecg_detailed} className="fit-image-50" rounded />
          <Image src={heartrate} className="fit-image-50" rounded />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center mt-3">
          <Button className="prediction-button" onClick={handleOpen}>
            Get your prediction here
          </Button>
        </Col>
      </Row>
      <PredictionForm show={showModal} onHide={handleClose} />
    </Container>
  );
}
