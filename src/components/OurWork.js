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
          <h3>🩺 Our Work</h3>
          <p>
            Our project focuses on using artificial intelligence to detect early
            signs of heart failure from 12-lead ECG signals. By leveraging the
            large PTB-XL clinical ECG dataset, we developed an AI-assisted
            diagnostic system capable of identifying abnormal cardiac patterns
            linked to early heart failure.
          </p>
          <p>
            Our approach combines deep learning with traditional machine
            learning to build a hybrid model that is both accurate and
            interpretable. This system can process ECG recordings in real-time,
            helping clinicians make quicker and more reliable decisions,
            especially in resource-limited settings.
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
