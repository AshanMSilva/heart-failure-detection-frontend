import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Interpretation() {
  const { result } = useSelector((state) => state.prediction);
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={12}>
          <h3>🩺 Interpretation</h3>
          <p>
            The model predicts a{" "}
            <strong>{(result.probability[1] * 100).toFixed(2)}%</strong>{" "}
            probability of early heart failure. A probability above{" "}
            <strong>50%</strong> indicates a higher likelihood of abnormal
            cardiac activity and should be reviewed by a clinician for
            confirmation.
          </p>
          <p>
            This result is based on the patient’s ECG waveform features
            extracted using our trained
            <strong>1D CNN + Random Forest hybrid model</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
