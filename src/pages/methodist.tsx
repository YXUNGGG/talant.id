import { Avatar } from "@/components/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
import { PlusIcon } from "lucide-react"

const QuestionStatuses = {
  new: "Новый",
  saved: "Сохраненный",
  on_review: "на проверке",
  need_to_fix: "Необходимо исправить",
} as const

export type QuestionStatuses =
  (typeof QuestionStatuses)[keyof typeof QuestionStatuses]

const filters = ["Автор", "Тип вопроса", "Статус", "Создано с", "Создано до"]
const questions = [
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.new} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Роман Бурашнов" shortName="РБ" />,
  },
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.on_review} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Методист Софья" shortName="МС" />,
  },
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.saved} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Новый методист" shortName="НМ" />,
  },
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
  },
]

export function MethodistPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg">Вопросы</h2>
      <div className="flex gap-1.5">
        {filters.map((filter) => (
          <Badge className="h-6 rounded-sm bg-card text-foreground">
            {filter}
          </Badge>
        ))}
      </div>

      <table className="w-full">
        <tr className="grid grid-cols-[2fr_2fr_3fr_1.6fr_1.3fr_1.3fr_2fr] pb-2">
          {[
            "Тип вопроса",
            "Группа менторов",
            "Тема вопроса",
            "Статус",
            "Создано",
            "Обновлено",
            "Автор",
          ].map((title) => (
            <th className="pl-4 text-left font-medium">{title}</th>
          ))}
        </tr>
        {questions.map((question, idx) => (
          <tr
            key={question.theme + idx}
            className="grid grid-cols-[2fr_2fr_3fr_1.6fr_1.3fr_1.3fr_2fr] bg-card last:border-b"
          >
            {Object.values(question).map((col) => (
              <td className="border-t border-l py-1.5 pl-4 last:border-r">
                {col}
              </td>
            ))}
          </tr>
        ))}
      </table>
      <Button
        variant="primary"
        className="h-11 w-full bg-transparent hover:bg-primary/10"
      >
        <PlusIcon />
        Создать вопрос
      </Button>
    </div>
  )
}

type StatusBadgeProps = {
  status: QuestionStatuses
}

function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<QuestionStatuses, string> = {
    Новый: "bg-[#027A48]/15 text-[#027A48]",
    Сохраненный: "bg-secondary-foreground/15 text-secondary-foreground",
    "на проверке": "bg-[#B54708]/15 text-[#B54708]",
    "Необходимо исправить": "bg-destructive/15 text-destructive",
  }

  return <Badge className={clsx(statusStyles[status])}>{status}</Badge>
}

type AvatarContainerProps = {
  name: string
  shortName: string
}

function AuthorContainer({ name, shortName }: AvatarContainerProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8 text-sm">{shortName}</Avatar>
      <p>{name}</p>
    </div>
  )
}
