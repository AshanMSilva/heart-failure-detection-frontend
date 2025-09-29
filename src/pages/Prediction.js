import { Container, Card } from "react-bootstrap";
import ECGPlot from "../components/ECGPlot";
import PieChartPlot from "../components/PieChartPlot";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Prediction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { result } = useSelector((state) => state.prediction);
  if (result == null) {
    return <Navigate to="/" replace />;
  }
  return (
    <Container>
      <Card className="mt-4 p-2 shadow-sm">
        <h2>Prediction Result</h2>
        <p className="lead">
          Predicted Heart Failure Probability:{" "}
          <strong>{(result.probability[1] * 100).toFixed(2)}%</strong>
        </p>
        <br />
        <PieChartPlot />
        <h5 className="mt-4">ECG Signal</h5>
        <ECGPlot />
      </Card>
    </Container>
  );
}
