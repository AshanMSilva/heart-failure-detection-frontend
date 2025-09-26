import { Container, Card } from "react-bootstrap";
import ECGPlot from "../components/ECGPlot";
import BarGraph from "../components/BarGraph";

export default function Prediction() {
  return (
    <Container>
      <Card className="mt-4 p-4 shadow-sm">
        <h2>Prediction Result</h2>
        <p className="lead">
          Predicted Heart Failure Probability: <strong>75%</strong>
        </p>

        <h5 className="mt-4">ECG Signal</h5>
        <ECGPlot />

        <h5 className="mt-4">Interpretation</h5>
        <BarGraph />
      </Card>
    </Container>
  );
}
