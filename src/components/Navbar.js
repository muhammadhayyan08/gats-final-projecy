import React from "react"
import { useAuth } from "../context/AuthContext"

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useAuth()

  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <button onClick={toggleSidebar} className="btn btn-primary">
          ☰
        </button>
        <div style={{ fontWeight: "700", fontSize: "1.5rem" }}>Apprex</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span>{user?.email}</span>
        <button className="btn btn-logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}
