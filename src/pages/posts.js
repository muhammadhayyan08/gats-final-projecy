import React from "react"
import DashboardLayout from "../components/DashboardLayout"

export default function Posts() {
  const posts = [
    { id: 1, title: "First post", date: "2026-01-01" },
    { id: 2, title: "Second post", date: "2026-01-02" },
  ]

  return (
    <DashboardLayout>
      <h1 style={{ color: "white", marginBottom: "1rem" }}>Posts</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {posts.map(post => (
          <div
            key={post.id}
            style={{
              padding: "1rem",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              color: "white",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
