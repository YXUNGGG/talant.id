import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

export function ExitButton() {
  const navigate = useNavigate()
  return (
    <Button
      className="w-full"
      onClick={() => {
        localStorage.removeItem("role")
        navigate("/login")
      }}
    >
      Выйти из аккаунта
    </Button>
  )
}
