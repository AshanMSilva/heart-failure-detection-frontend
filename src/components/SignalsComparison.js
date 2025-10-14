import { Col, Container, Figure, Row } from "react-bootstrap";
import normal_signal from "../assets/images/normal_signal.png";
import preprocessed_signal from "../assets/images/preprocessed_signal.png";

export default function SignalsComparison() {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={12}>
          <h3>⚙️ Signal Preprocessing</h3>
          <p>
            Before training, all ECG signals from the PTB-XL dataset were
            carefully cleaned and standardized to improve model accuracy. The
            preprocessing pipeline included:
          </p>
          <ul>
            <li>
              <strong>High-pass filtering</strong> with a 0.5 Hz Butterworth
              filter to remove baseline wander and low-frequency noise.
            </li>
            <li>
              <strong>Z-score normalization</strong> to standardize signal
              amplitude across all leads.
            </li>
            <li>
              <strong>Diagnostic label grouping</strong> into five clinically
              meaningful superclasses: Normal (NORM), Myocardial Infarction
              (MI), Hypertrophy (HYP), ST/T Changes (STTC), and Conduction
              Disturbances (CD).
            </li>
          </ul>
          <p>
            After preprocessing, the dataset contained{" "}
            <strong>15,107 ECG samples</strong> (9,083 normal and 6,024
            abnormal). The resulting signals displayed smoother baselines and
            clearer R-peaks, confirming successful noise removal and signal
            enhancement for model training.
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
