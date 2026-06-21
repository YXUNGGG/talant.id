import { QuestionTable } from "@/components/question-table"
import { EditQuestionDialog } from "@/components/edit-question-dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { useFilter } from "@/hooks/use-filter"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/avatar"
import { useQuestionContext } from "@/hooks/use-question-context"

export function MethodistPage() {
  const { addQuestion, questionsArr } = useQuestionContext()
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
        <EditQuestionDialog
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
