import { Avatar } from "./avatar"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Roles, type UserType } from "@/lib/types&constants"
import { Button } from "./ui/button"
import { Edit2Icon, TrashIcon } from "lucide-react"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./ui/popover"
import { Input } from "./ui/input"
import { BadgeGroup } from "./badge-group"

type AdminAccordionItemProps = {
  user: UserType
  editUser: (user: UserType) => void
  removeUser: (email: string) => void
}

export function AdminAccordionItem({
  user,
  editUser,
  removeUser,
}: AdminAccordionItemProps) {
  const handleEditUser = (formData: FormData) => {
    console.log(user)
    console.log({
      name: formData.get("name")?.toString(),
      email: formData.get("email")?.toString(),
    })

    editUser({
      ...user,
      name: formData.get("name")?.toString() ?? user.name,
      email: formData.get("email")?.toString() ?? user.email,
    })
  }

  return (
    <AccordionItem value={user.id}>
      <AccordionTrigger className="group flex w-full">
        <div className="flex min-w-max flex-5 items-center gap-2">
          <Avatar className="size-9">{user.shortName}</Avatar>
          <div className="font-medium">
            <h3 className="text-lg">{user.name}</h3>
            <p className="text-xs">{user.email}</p>
          </div>
        </div>
        <div className="flex-6">
          <BadgeGroup
            values={user.roles}
            fullState={Object.values(Roles)}
            fullStateLabel="Роли"
          />
        </div>
        <div className="flex gap-1">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group-[:not(:hover)]:hidden-element"
                variant="primary"
                size="icon-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <Edit2Icon fill="#53389E" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="gap-2 p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <PopoverHeader>
                <PopoverTitle>Редактирование пользователя</PopoverTitle>
              </PopoverHeader>
              <form className="contents" action={handleEditUser}>
                <Input
                  className="h-8"
                  placeholder="ФИО"
                  defaultValue={user.name}
                  name="name"
                />
                <Input
                  className="h-8"
                  placeholder="Email"
                  defaultValue={user.email}
                  name="email"
                />
                <PopoverClose>
                  <Button className="w-full" variant="primary">
                    Сохранить изменения
                  </Button>
                </PopoverClose>
              </form>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group-[:not(:hover)]:hidden-element"
                variant="primary"
                size="icon-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <TrashIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-[230px] gap-2 p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <PopoverHeader>
                <PopoverTitle>Удалить пользователя</PopoverTitle>
              </PopoverHeader>
              <p>Вы хотите удалить этого пользователя?</p>
              <PopoverClose asChild>
                <Button
                  className="w-full"
                  variant="destructive"
                  onClick={() => removeUser(user.id)}
                >
                  Удалить
                </Button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        </div>
      </AccordionTrigger>
      <AccordionContent className="flex pl-4">
        <div className="flex-3">
          <BadgeGroup
            values={user.currencies}
            label="Валюта"
            variant="secondary"
          />
        </div>
        <div className="flex-4">
          <BadgeGroup values={user.games} label="Игры" variant="primary" />
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
