import { QuestionTable } from "@/components/question-table"
import { Badge } from "@/components/ui/badge"
import { filters, questions } from "@/lib/data"

export function ExpertPage() {
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

      <QuestionTable questions={questions} />
    </div>
  )
}
