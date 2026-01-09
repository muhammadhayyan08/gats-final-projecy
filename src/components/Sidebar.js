import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const links = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Posts", path: "/posts" },
  { name: "Charts", path: "/charts" },
  { name: "User", path: "/user" },
]

export default function Sidebar({ isOpen, closeSidebar }) {
  const location = useLocation()

  return (
    <div className={`sidebar ${isOpen ? "show" : "hidden"}`}>
      <h2 style={{ color: "white", marginBottom: "2rem" }}>Apprex</h2>
      {links.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className={`sidebar-link ${
            location.pathname === link.path ? "active" : ""
          }`}
          onClick={closeSidebar}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}
