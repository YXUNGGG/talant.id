import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function LoginPage() {
  const [login, setLogin] = useState("")
  const navigate = useNavigate()

  const handleAuth = () => {
    if (!login) return

    localStorage.setItem("role", login)
    navigate("/main")
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="w-[390px]">
        <CardHeader>
          <CardTitle>Авторизация</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <Field>
            <FieldLabel htmlFor="login">Логин</FieldLabel>
            <Input
              id="login"
              placeholder="Введите логин"
              required
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </Field>

          <FieldGroup className="gap-3">
            <Field>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <Input
                id="password"
                placeholder="Введите пароль"
                type="password"
                required
              />
            </Field>

            <Field orientation="horizontal">
              <Checkbox id="is-remember" name="remember-checkbox" />
              <Label htmlFor="is-remember">Запомнить меня</Label>
            </Field>
          </FieldGroup>
        </CardContent>

        <CardFooter className="mt-2">
          <Button className="w-full" onClick={handleAuth}>
            Войти
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
