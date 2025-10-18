import { Col, Container, Row } from "react-bootstrap";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function OurResults() {
  const data = [
    {
      name: "Accuracy",
      "1d_value": 0.8935,
      res_value: 0.8653,
      "2d_value": 0.8696,
    },
    {
      name: "Precision",
      "1d_value": 0.8465,
      res_value: 0.7846,
      "2d_value": 0.8321,
    },
    {
      name: "Recall",
      "1d_value": 0.8951,
      res_value: 0.9129,
      "2d_value": 0.8432,
    },
    {
      name: "F1 Score",
      "1d_value": 0.8701,
      res_value: 0.8439,
      "2d_value": 0.8376,
    },
    {
      name: "F-beta Score",
      "1d_value": 0.8849,
      res_value: 0.884,
      "2d_value": 0.8409,
    },
  ];
  return (
    <Container className="mt-3 mb-3">
      <Row>
        <Col sm={12}>
          <h3>📊 Results</h3>
          <p>
            The hybrid model (1D CNN + Random Forest) achieved an accuracy of
            0.8935, balancing precision and recall.
          </p>
        </Col>
        <Col sm={12}>
          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ fontSize: "14px", fontWeight: "bold" }}
                />
                <Bar
                  name="1D CNN + Random Forest"
                  barSize={50}
                  dataKey="1d_value"
                  fill="#4F46E5"
                  activeBar={<Rectangle fill="#6366F1" stroke="#3730A3" />}
                />
                <Bar
                  name="1D Residual CNN + XGBoost"
                  barSize={50}
                  dataKey="res_value"
                  fill="#F59E0B"
                  activeBar={<Rectangle fill="#FBBF24" stroke="#B45309" />}
                />
                <Bar
                  name="2D CNN + Random Forest"
                  barSize={50}
                  dataKey="2d_value"
                  fill="#10B981"
                  activeBar={<Rectangle fill="#34D399" stroke="#047857" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
