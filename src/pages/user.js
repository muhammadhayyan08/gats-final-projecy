import React from "react"
import DashboardLayout from "../components/DashboardLayout"
import { useAuth } from "../context/AuthContext"

export default function UserPage() {
  const { user } = useAuth()

  return (
    <DashboardLayout>
      <h1>User Profile</h1>
      <div className="glass-card" style={{ maxWidth: "400px" }}>
        <p>Email: {user?.email}</p>
        <p>Account type: Standard User</p>
        <p>Member since: Jan 2026</p>
      </div>
    </DashboardLayout>
  )
}
