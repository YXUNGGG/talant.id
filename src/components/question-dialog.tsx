import type { QuestionType } from "@/lib/types&constants"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"

type QuestionDialogProps = {
  question: QuestionType
  children: React.ReactElement
  isStudent?: boolean
  setPassed?: () => void
}

export function QuestionDialog({
  question,
  children,
  isStudent = true,
  setPassed,
}: QuestionDialogProps) {
  const [answer, setAnswer] = useState("")

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="z-100 w-200! max-w-4/5! gap-9 p-13" zMax={true}>
        <DialogHeader>
          <DialogTitle className="mb-5 text-2xl font-bold">
            {question.title}
          </DialogTitle>
          <DialogTitle className="text-xl font-bold">
            {question.currentQuestion}
          </DialogTitle>
          <DialogDescription className="text-base text-secondary-foreground">
            {question.description}
          </DialogDescription>
        </DialogHeader>

        <Textarea
          placeholder="Введите ответ"
          disabled={!isStudent}
          value={answer}
          className="h-22 text-[15px]"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <DialogClose disabled={!isStudent && answer.length < 5}>
          <Button
            disabled={isStudent && answer.length < 5}
            size="lg"
            onClick={setPassed}
            className="w-full"
          >
            Подтвердить
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
