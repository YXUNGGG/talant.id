import { Avatar } from "@/components/avatar"
import { BadgeGroup } from "@/components/badge-group"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import type { ProfileResourcesType, ProfileUserType } from "@/pages/profile"
import { Link } from "react-router-dom"

const games = ["Название игры", "Математика", "Инглиш", "Тест 22.12"]
const currencies = ["Марки: 0", "Фунты: 0", "Кроны: 0", "Стерлинги: 0"]

type ProfileCardProps = {
  user: ProfileUserType
  resources: ProfileResourcesType
  openSettings: () => void
}

export function ProfileCard({
  user,
  resources,
  openSettings,
}: ProfileCardProps) {
  return (
    <Card className="w-[750px] p-0">
      <CardContent className="space-y-5 p-10">
        <div className="mb-8 flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="size-18 text-3xl">{user.shortName}</Avatar>
            <div className="space-y-2">
              <p className="text-xl font-bold">{user.name}</p>
              <p className="font-semibold text-[#A4A7AE]">Игрок</p>
            </div>
          </div>
          <Button variant="primary" onClick={openSettings}>
            Редактировать профиль
          </Button>
        </div>

        <BadgeGroup
          values={games}
          label="Игры"
          variant="primary"
          className="h-5.5 text-sm"
        />
        <BadgeGroup values={currencies} label="Валюта" variant="secondary" />

        <Field className="gap-2">
          <FieldLabel className="font-medium">Подключенные ресурсы</FieldLabel>
          <div className="flex gap-1.5">
            {Object.entries(resources)
              .filter((r) => r[1])
              .map(([name, link]) => (
                <Link className="cursor-pointer" to={link}>
                  {" "}
                  <Badge
                    variant="primary"
                    className="h-8 px-3 text-sm font-medium"
                  >
                    {name}
                  </Badge>
                </Link>
              ))}
          </div>
        </Field>
      </CardContent>
    </Card>
  )
}
