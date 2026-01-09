import { navigate } from "gatsby"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    navigate("/login")
  }, [])

  return null
}
