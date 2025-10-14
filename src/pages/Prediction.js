import { Container } from "react-bootstrap";
import ECGPlot from "../components/ECGPlot";
import PieChartPlot from "../components/PieChartPlot";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Interpretation from "../components/InterPretation";

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
      <h2>Prediction Result</h2>
      <p className="lead">
        Predicted Heart Failure Probability:{" "}
        <strong>{(result.probability[1] * 100).toFixed(2)}%</strong>
      </p>
      <br />
      <PieChartPlot />
      <ECGPlot />
      <Interpretation />
      <div>
        <p>
          <strong>Disclaimer:</strong> This AI prediction is intended for
          research and educational purposes only. It should not be used as a
          substitute for professional medical diagnosis.
        </p>
      </div>
    </Container>
  );
}
