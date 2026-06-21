import { AdminAccordionItem } from "@/components/admin-accordion-item"
import { Avatar } from "@/components/avatar"
import { BadgeGroup } from "@/components/badge-group"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { mentors, players, users } from "@/lib/data"

import { Roles, type UserType } from "@/lib/types&constants"
import { PlusIcon } from "lucide-react"
import { useState } from "react"

export function AdminPage() {
  const [usersState, setUsersState] = useState<UserType[]>(users)
  const [newUserRoles, setNewUserRoles] = useState<string[]>([])

  const addUser = (formData: FormData) => {
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    const newUser: (typeof users)[number] = {
      games: [],
      currencies: [],
      roles: newUserRoles,
      email: email,
      name: name,
      id: email + name,
      shortName: name
        .split(" ")
        .map((l) => l[0])
        .join("")
        .slice(0, 2),
    }
    setUsersState((prev) => [...prev, newUser])
  }

  const editUser = (user: UserType) => {
    setUsersState((prev) => {
      const currentArr = [...prev]
      const userIdx = prev.findIndex((usr) => usr.id === user.id)
      console.log(userIdx)

      if (userIdx !== -1) currentArr[userIdx] = { ...user }
      return currentArr
    })
  }

  const removeUser = (id: string) => {
    setUsersState((prev) => prev.filter((user) => user.id !== id))
  }

  return (
    <div className="space-y-4 p-4">
      <header className="flex h-12 w-full items-center justify-between pr-2">
        <Input placeholder="Поиск" className="h-full w-100" />
        <Avatar className="size-11">РБ</Avatar>
      </header>
      <div className="flex h-full justify-center gap-4">
        <Card className="h-full flex-3">
          <CardHeader>
            <CardTitle>Пользователи</CardTitle>
            <CardDescription>
              <Input placeholder="Поиск" className="w-70" />
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-1 overflow-y-auto">
            <div className="flex text-sm font-semibold">
              <p className="flex-4">Пользователь</p>
              <p className="flex-5">Роли</p>
            </div>
            <Accordion
              className="flex-1 overflow-y-auto"
              type="single"
              collapsible
            >
              {usersState.map((user) => (
                <AdminAccordionItem
                  user={user}
                  key={user.id}
                  editUser={editUser}
                  removeUser={removeUser}
                />
              ))}
            </Accordion>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="primary" className="h-8 w-full">
                  <PlusIcon /> Создать пользователя
                </Button>
              </DialogTrigger>
              <DialogContent className="px-0 py-5">
                <DialogHeader className="px-5">
                  <DialogTitle>Создать пользователя</DialogTitle>
                </DialogHeader>

                <form action={addUser} className="flex flex-wrap gap-2 px-5">
                  <Input
                    name="name"
                    className="h-8 flex-1"
                    placeholder="ФИО"
                    required
                  />
                  <Input
                    name="email"
                    className="h-8 flex-1"
                    placeholder="Email"
                    required
                  />
                  <Input
                    className="h-8 w-full"
                    placeholder="Пароль"
                    type="password"
                  />

                  <BadgeGroup
                    isAutoAnimate={false}
                    values={["Игрок"]}
                    onChange={setNewUserRoles}
                    fullState={Object.values(Roles)}
                    fullStateLabel="Роли"
                    label="Роли"
                  />

                  <DialogClose className="w-full!">
                    <Button variant="primary" className="w-full flex-1">
                      Создать пользователя
                    </Button>
                  </DialogClose>
                </form>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
        <Card className="h-max flex-2">
          <CardHeader>
            <CardTitle>Менторы</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-1 overflow-y-auto">
            <div className="flex text-sm font-semibold">
              <p className="flex-3">Название группы</p>
              <p className="flex-2">Участники</p>
            </div>

            <Accordion collapsible type="single">
              {mentors.map((group) => (
                <AccordionItem key={group.value} value={group.value}>
                  <AccordionTrigger className="w-full">
                    <h3 className="text-lg">{group.title}</h3>
                    <div className="flex flex-1 justify-end gap-1 group-aria-expanded/accordion-trigger:hidden">
                      {group.participants.slice(0, 5).map((p, idx) => (
                        <Avatar
                          key={p.name + idx}
                          className="size-7 text-[11px]"
                        >
                          {p.shortName}
                        </Avatar>
                      ))}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    {group.participants.map((p, idx) => (
                      <div
                        key={p.name + idx}
                        className="flex items-center gap-3 px-6"
                      >
                        <Avatar className="size-6 text-[11px]">
                          {p.shortName}
                        </Avatar>
                        <p>{p.name}</p>
                      </div>
                    ))}
                    <Button variant="primary" className="mt-2 h-8 w-full">
                      <PlusIcon /> Добавить участника
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button variant="primary" className="h-8 w-full">
              <PlusIcon /> Создать группу менторов
            </Button>
          </CardContent>
        </Card>
        <Card className="h-max flex-2">
          <CardHeader>
            <CardTitle>Участники</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-1 overflow-y-auto">
            <div className="flex text-sm font-semibold">
              <p className="flex-3">Название группы</p>
              <p className="flex-2">Участники</p>
            </div>

            <Accordion collapsible type="single">
              {players.map((player) => (
                <AccordionItem value={player.value}>
                  <AccordionTrigger className="w-full">
                    <h3 className="text-lg">{player.title}</h3>
                    <div className="flex flex-1 justify-end gap-1 group-aria-expanded/accordion-trigger:hidden">
                      {player.participants.slice(0, 5).map((p) => (
                        <Avatar className="size-7 text-[11px]">
                          {p.shortName}
                        </Avatar>
                      ))}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                    {player.participants.map((p) => (
                      <div className="flex items-center gap-3 px-6">
                        <Avatar className="size-6 text-[11px]">
                          {p.shortName}
                        </Avatar>
                        <p>{p.name}</p>
                      </div>
                    ))}
                    <Button variant="primary" className="mt-2 h-8 w-full">
                      <PlusIcon /> Добавить участника
                    </Button>

                    <BadgeGroup
                      values={player.games}
                      label="Игры"
                      variant="primary"
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Button variant="primary" className="h-8 w-full">
              <PlusIcon /> Создать группу игроков
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
