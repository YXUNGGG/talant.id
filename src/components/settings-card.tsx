import type { ProfileResourcesType, ProfileUserType } from "@/pages/profile"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Avatar } from "./avatar"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

type SettingsCardProps = {
  setUser: (user: ProfileUserType) => void
  user: ProfileUserType
  resources: ProfileResourcesType
  setResources: (resources: ProfileResourcesType) => void
  close: () => void
}

export function SettingsCard({
  user,
  setUser,
  resources,
  setResources,
  close,
}: SettingsCardProps) {
  const handleSave = (formData: FormData) => {
    const userName = formData.get("name")?.toString() ?? user.name

    setUser({
      name: userName,
      shortName: userName
        .split(" ")
        .map((w) => w[0])
        .join(""),
      email: formData.get("email")?.toString() ?? user.email,
    })

    setResources({
      GitBucket: formData.get("GitBucket")?.toString() ?? resources.GitBucket,
      Work: formData.get("Work")?.toString() ?? resources.Work,
      Redmain: formData.get("Redmain")?.toString() ?? resources.Redmain,
    })

    close()
  }

  return (
    <Card className="w-[630px] p-10">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl font-bold">Настройки профиля</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-0">
        <div className="flex items-center gap-4">
          <Avatar className="size-18 text-3xl">{user.shortName}</Avatar>
          <div className="space-y-2">
            <p className="text-xl font-bold">{user.name}</p>
            <p className="font-semibold text-[#A4A7AE]">Игрок</p>
          </div>
        </div>

        <form action={handleSave} className="space-y-10">
          <div className="flex justify-between">
            <p className="text-base font-medium">Аккаунт</p>
            <FieldGroup className="w-[350px] gap-4">
              <Field>
                <FieldLabel className="font-medium">Фамилия и Имя</FieldLabel>
                <Input
                  name="name"
                  className="h-8"
                  placeholder="Введите Фамилию и Имя"
                  defaultValue={user.name}
                />
              </Field>

              <Field>
                <FieldLabel className="font-medium">Почта</FieldLabel>
                <Input
                  name="email"
                  className="h-8"
                  placeholder="Введите почту"
                  defaultValue={user.email}
                />
              </Field>
            </FieldGroup>
          </div>

          <div className="flex justify-between">
            <p className="text-base font-medium">
              Ссылки на <br />
              ресурсы колледжа
            </p>
            <FieldGroup className="w-[350px] gap-4">
              {Object.entries(resources).map(([name, link]) => (
                <Field>
                  <FieldLabel className="font-medium">{name}</FieldLabel>
                  <Input
                    name={name}
                    className="h-8"
                    placeholder="Введите Ссылку"
                    defaultValue={link}
                  />
                </Field>
              ))}
            </FieldGroup>
          </div>
          <div className="flex justify-end">
            <Button variant="primary">Сохранить изменения</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
