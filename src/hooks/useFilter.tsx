import { FilterPopover } from "@/components/filter-popover"
import { Badge } from "@/components/ui/badge"
import {
  QuestionStatuses,
  QuestionTypes,
  type QuestionType,
} from "@/lib/types&constants"
import { useState } from "react"

export function useFilter(questions: QuestionType[]) {
  const [filter, setFilter] = useState<{
    types: QuestionTypes[]
    statuses: QuestionStatuses[]
  }>({
    types: [],
    statuses: [],
  })

  const setFilteredQuestion = (
    property: keyof typeof filter,
    value: (string | QuestionTypes | QuestionStatuses)[]
  ) => {
    setFilter((prev) => {
      return { ...prev, [property]: value }
    })
  }

  const filteredQuestions = questions.filter(
    (question) =>
      (filter.types.length ? filter.types?.includes(question.type) : true) &&
      (filter.statuses.length
        ? filter.statuses?.includes(question.status.props.status)
        : true)
  )

  const types = QuestionTypes
  const statuses = QuestionStatuses

  const typesArr = [
    types.expert_review,
    types.answer_options,
    types.couple_words,
    types.missed_words,
  ]
  const statusesArr = [
    statuses.new,
    statuses.need_to_fix,
    statuses.on_review,
    statuses.saved,
  ]

  const filtersElement = (
    <div className="flex gap-1.5">
      <FilterPopover
        values={typesArr}
        onChange={(values) => setFilteredQuestion("types", values)}
      >
        <Badge className="h-6 cursor-pointer rounded-sm bg-card text-foreground data-open:border-primary">
          Тип вопроса
        </Badge>
      </FilterPopover>
      <FilterPopover
        values={statusesArr}
        onChange={(values) => setFilteredQuestion("statuses", values)}
      >
        <Badge className="h-6 cursor-pointer rounded-sm bg-card text-foreground data-open:border-primary">
          Статус
        </Badge>
      </FilterPopover>
    </div>
  )

  return { filtersElement, filteredQuestions }
}
