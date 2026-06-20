import { QuestionTable } from "@/components/question-table"
import { QuestionDialog } from "@/components/question-dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { useQuestion } from "@/hooks/useQuestion"
import { useFilter } from "@/hooks/useFilter"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/avatar"

export function MethodistPage() {
  const { addQuestion, questionsArr } = useQuestion()
  const { filteredQuestions, filtersElement } = useFilter(questionsArr)

  return (
    <div className="space-y-4 p-4">
      <header className="flex h-12 w-full items-center justify-between pr-2">
        <Input placeholder="Поиск" className="h-full w-100" />
        <Avatar className="size-11">РБ</Avatar>
      </header>
      <div className="space-y-4">
        <h2 className="text-lg">Вопросы</h2>
        {filtersElement}

        {filteredQuestions.length !== 0 ? (
          <QuestionTable
            addQuestion={addQuestion}
            questions={filteredQuestions}
          />
        ) : (
          <div className="flex justify-center py-6 text-muted-foreground">
            Ничего не найдено
          </div>
        )}
        <QuestionDialog
          addQuestion={addQuestion}
          isExert={false}
          trigger={
            <Button
              variant="primary"
              className="h-11 w-full bg-transparent hover:bg-primary/10"
            >
              <PlusIcon />
              Создать вопрос
            </Button>
          }
        />
      </div>
    </div>
  )
}
