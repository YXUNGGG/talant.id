import { useQuestion } from "@/hooks/use-question"
import { QuestionContext } from "./question-context"

export function QuestionContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const state = useQuestion()

  return (
    <QuestionContext.Provider value={state}>
      {children}
    </QuestionContext.Provider>
  )
}
