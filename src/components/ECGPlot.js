import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ECGPlot() {
  const { result } = useSelector((state) => state.prediction);
  const [lead, setLead] = useState(result.sig_names[1]);

  var leads = {};
  for (let i = 0; i < result.sig_names.length; i++) {
    let lead_name = result.sig_names[i];
    let lead_values = [];
    for (let j = 0; j < result.preprocessed_signals.length; j++) {
      lead_values.push({ x: j, y: result.preprocessed_signals[j][i] });
    }
    leads[lead_name] = lead_values;
  }
  console.log(leads);

  return (
    <div className="mt-4">
      <Form.Select
        value={lead}
        onChange={(e) => setLead(e.target.value)}
        className="mb-3"
      >
        {Object.keys(leads).map((l) => (
          <option key={l}>{l}</option>
        ))}
      </Form.Select>

      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <LineChart data={leads[lead]}>
            <XAxis tick={false} dataKey="x" />
            <YAxis tick={false} />
            <Line type="monotone" dataKey="y" stroke="#dc3545" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
