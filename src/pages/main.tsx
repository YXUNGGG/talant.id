import type { RoleValueType } from "@/lib/types&constants"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function MainPage() {
  const navigate = useNavigate()
  const userRole = localStorage.getItem("role") as RoleValueType

  useEffect(() => {
    switch (userRole) {
      case "admin":
        navigate("/main/admin")
        break
      case "expert":
        navigate("/main/expert")
        break
      case "gamedesigner":
        navigate("/main/gamedesigner")
        break
      case "methodist":
        navigate("/main/methodist")
        break
      case "student":
        navigate("/main/student")
        break
      default:
        navigate("/login")
    }
  })

  return <div />
}
