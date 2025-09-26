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

export default function ECGPlot() {
  const [lead, setLead] = useState("Lead I");

  const leads = {
    "Lead I": Array.from({ length: 100 }, (_, i) => ({
      x: i,
      y: Math.sin(i / 10),
    })),
    "Lead II": Array.from({ length: 100 }, (_, i) => ({
      x: i,
      y: Math.cos(i / 10),
    })),
  };

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
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#dc3545" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
