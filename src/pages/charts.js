import React from "react"
import DashboardLayout from "../components/DashboardLayout"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts"

export default function Charts() {
  const data = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 600 },
    { month: "Mar", value: 800 },
    { month: "Apr", value: 700 },
    { month: "May", value: 900 },
    { month: "Jun", value: 1000 },
  ]

  return (
    <DashboardLayout>
      <h1 style={{ color: "white", marginBottom: "1rem" }}>Charts</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            padding: "1rem",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            color: "white",
          }}
        >
          <h3>Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#22d3ee" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            padding: "1rem",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
            color: "white",
          }}
        >
          <h3>Tasks Overview</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  )
}
