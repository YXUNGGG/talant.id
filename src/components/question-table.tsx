import { Avatar } from "./avatar"
import clsx from "clsx"
import type { QuestionStatuses, QuestionType } from "@/lib/types&constants"
import { Badge } from "./ui/badge"
import { QuestionDialog } from "./question-dialog"

type QuestionTableProps = {
  isExpert?: boolean
  questions: QuestionType[]
  addQuestion: (question: QuestionType) => void
}

export function QuestionTable({
  questions,
  isExpert = false,
  addQuestion,
}: QuestionTableProps) {
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
        {questions.map(({ id, currentQuestion, description, ...tableData }) => (
          <tr
            key={id}
            className={
              "grid bg-card last:border-b hover:bg-secondary/50" + gridColumns
            }
          >
            {Object.values(tableData).map((col, idx) => (
              <QuestionDialog
                key={idx}
                isExert={isExpert}
                addQuestion={addQuestion}
                initialValue={{
                  id,
                  currentQuestion,
                  description,
                  ...tableData,
                }}
                trigger={
                  <td className="border-t border-l py-1.5 pl-4 last:border-r">
                    {col}
                  </td>
                }
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export type StatusBadgeProps = {
  status: QuestionStatuses
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<QuestionStatuses, string> = {
    Новый: "bg-[#027A48]/15 text-[#027A48]",
    Сохраненный: "bg-secondary-foreground/15 text-secondary-foreground",
    "На проверке": "bg-[#B54708]/15 text-[#B54708]",
    "Необходимо исправить": "bg-destructive/15 text-destructive",
  }

  return <Badge className={clsx(statusStyles[status])}>{status}</Badge>
}

export type AuthorContainerProps = {
  name: string
  shortName: string
}

export function AuthorContainer({ name, shortName }: AuthorContainerProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8 text-sm">{shortName}</Avatar>
      <p>{name}</p>
    </div>
  )
}
