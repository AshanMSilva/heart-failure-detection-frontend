import { Col, Container, Image, Row } from "react-bootstrap";
import highLevelArchitecture from "../assets/images/high-level-architecture.png";

export default function ModelArchitecture() {
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col md={6}>
          <h3>🧠 Model Architecture</h3>
          <p>
            The system follows a <strong>hybrid AI architecture</strong>{" "}
            consisting of two main components:
          </p>
          <ul>
            <li>
              <strong>CNN Feature Extraction</strong> – A Convolutional Neural
              Network (CNN) processes the 12-lead ECG signals and learns key
              temporal and spatial patterns.
            </li>
            <li>
              <strong>Traditional ML Classification</strong> – The features
              extracted from the CNN are combined with patient demographic data
              (age and gender) and passed into machine learning classifiers such
              as Random Forest, SVM, Logistic Regression, and XGBoost to
              generate the final prediction.
            </li>
          </ul>
          <p>
            Among all configurations, the{" "}
            <strong>
              1D CNN with 128 extracted features combined with a Random Forest
              classifier
            </strong>{" "}
            achieved the best balance of accuracy, precision, and recall. This
            architecture enables both high performance and interpretability,
            making it practical for real-world medical use.
          </p>
        </Col>
        <Col md={6}>
          <Image src={highLevelArchitecture} className="architecture-image" />
        </Col>
      </Row>
    </Container>
  );
}
