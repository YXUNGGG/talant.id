import { Avatar } from "@/components/avatar"
import { QuestionTable } from "@/components/question-table"
import { Input } from "@/components/ui/input"
import { useFilter } from "@/hooks/useFilter"
import { useQuestion } from "@/hooks/useQuestion"

export function ExpertPage() {
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
            isExpert
            addQuestion={addQuestion}
            questions={filteredQuestions}
          />
        ) : (
          <div className="flex justify-center py-6 text-muted-foreground">
            Ничего не найдено
          </div>
        )}
      </div>
    </div>
  )
}
