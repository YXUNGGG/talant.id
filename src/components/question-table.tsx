import { Avatar } from "./avatar"
import clsx from "clsx"
import type { QuestionStatuses } from "@/lib/types&constants"
import { Badge } from "./ui/badge"

type QuestionTableProps = {
  questions: {
    type: string
    group: string
    theme: string
    status: React.ReactElement
    created: string
    updated: string
    author: React.ReactElement
  }[]
}

export function QuestionTable({ questions }: QuestionTableProps) {
  const headerArr = [
    "Тип вопроса",
    "Группа менторов",
    "Тема вопроса",
    "Статус",
    "Создано",
    "Обновлено",
    "Автор",
  ]
  const gridColumns = " grid-cols-[2fr_2fr_3fr_1.6fr_1.3fr_1.3fr_2fr]"
  return (
    <table className="w-full">
      <thead>
        <tr className={"grid pb-2" + gridColumns}>
          {headerArr.map((title, idx) => (
            <th key={title + idx} className="grid pl-4 text-left font-medium">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {questions.map((question, idx) => (
          <tr
            key={question.theme + idx}
            className={
              "grid bg-card last:border-b hover:bg-secondary/50" + gridColumns
            }
          >
            {Object.values(question).map((col, idx) => (
              <td
                key={idx}
                className="border-t border-l py-1.5 pl-4 last:border-r"
              >
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

type StatusBadgeProps = {
  status: QuestionStatuses
}

export function StatusBadge({ status }: StatusBadgeProps) {
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

export function AuthorContainer({ name, shortName }: AvatarContainerProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8 text-sm">{shortName}</Avatar>
      <p>{name}</p>
    </div>
  )
}
