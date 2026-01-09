import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { useAuth } from "../context/AuthContext"
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
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

export default function Dashboard() {
  const authContext = useAuth()

  useEffect(() => {
    if (!authContext) return
    if (!authContext.user) navigate("/login")
  }, [authContext])

  if (!authContext || !authContext.user) return null
  const { user } = authContext

  const chartData = [
    { month: "Jan", users: 400, posts: 240, revenue: 300, tasks: 120 },
    { month: "Feb", users: 600, posts: 450, revenue: 500, tasks: 200 },
    { month: "Mar", users: 800, posts: 300, revenue: 700, tasks: 180 },
    { month: "Apr", users: 700, posts: 500, revenue: 600, tasks: 220 },
    { month: "May", users: 900, posts: 700, revenue: 900, tasks: 300 },
    { month: "Jun", users: 1000, posts: 800, revenue: 1200, tasks: 400 },
  ]

  const pieData = [
    { name: "Chrome", value: 400 },
    { name: "Firefox", value: 300 },
    { name: "Safari", value: 200 },
    { name: "Others", value: 100 },
  ]
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <DashboardLayout>
      <h1 style={{ color: "white", marginBottom: "1rem" }}>Dashboard</h1>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { name: "Users", value: 1200 },
          { name: "Posts", value: 85 },
          { name: "Revenue", value: "$5300" },
          { name: "Tasks", value: 320 },
        ].map(stat => (
          <div key={stat.name} className="glass-card stats-card">
            <h3>{stat.name}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {/* Chart Examples */}
        <div className="glass-card">
          <h3>Monthly Users</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#22d3ee" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Posts Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Bar dataKey="posts" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Revenue Growth</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#facc15" fill="#facc1533" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Browser Share</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Users vs Posts</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Bar dataKey="users" fill="#22d3ee" />
              <Bar dataKey="posts" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Revenue vs Posts</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#facc15" strokeWidth={3} />
              <Line type="monotone" dataKey="posts" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Tasks Completed</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" stroke="white" />
              <YAxis stroke="white" />
              <Tooltip />
              <Area type="monotone" dataKey="tasks" stroke="#34d399" fill="#34d39933" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card">
          <h3>Revenue Share</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={chartData} dataKey="revenue" nameKey="month" cx="50%" cy="50%" outerRadius={80} label>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardLayout>
  )
}
