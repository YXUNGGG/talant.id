import type { QuestionType } from "@/lib/types&constants"
import { createContext } from "react"

type QuestionContextType = {
  questions: Record<string, QuestionType>
  questionsArr: QuestionType[]
  addQuestion: (question: QuestionType) => void
}

export const QuestionContext = createContext<QuestionContextType | null>(null)
