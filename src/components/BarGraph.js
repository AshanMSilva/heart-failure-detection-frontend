import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BarGraph() {
  const data = [
    { label: "Heart Failure", value: 75 },
    { label: "Normal", value: 25 },
  ];

  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#0d6efd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
