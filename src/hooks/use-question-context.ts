import { QuestionContext } from "@/providers/question-context"
import { useContext } from "react"

export function useQuestionContext() {
  const state = useContext(QuestionContext)
  if (!state) throw Error("question state is not defined")
  else return state
}
