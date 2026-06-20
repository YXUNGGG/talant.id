import { AuthorContainer, StatusBadge } from "@/components/question-table"
import { QuestionStatuses, type QuestionType } from "@/lib/types&constants"

import { useMemo, useState } from "react"

export function useQuestion() {
  const [questions, setQuestions] = useState<Record<string, QuestionType>>({
    secret1: {
      id: "secret1",
      type: "С проверкой эксперта",
      group: "Английский язык",
      title: "Времена английского глагола",
      status: <StatusBadge status={QuestionStatuses.new} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Роман Бурашнов" shortName="РБ" />,
    },
    secret2: {
      id: "secret2",
      type: "С проверкой эксперта",
      group: "Русский язык",
      title: "Грамматика и Пунктуация",
      status: <StatusBadge status={QuestionStatuses.on_review} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Методист Софья" shortName="МС" />,
    },
    secret18: {
      id: "secret18",
      type: "С проверкой эксперта",
      group: "Русский язык",
      title: "Падежи и склонения",
      status: <StatusBadge status={QuestionStatuses.on_review} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Методист Софья" shortName="МС" />,
    },
    secret3: {
      id: "secret3",
      type: "С проверкой эксперта",
      group: "Философия",
      title: "Философия Древнего Востока",
      status: <StatusBadge status={QuestionStatuses.saved} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Новый методист" shortName="НМ" />,
    },
    secret4: {
      id: "secret42342",
      type: "С проверкой эксперта",
      group: "Английский язык",
      title: "Местоимения",
      status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
    },
    secret5: {
      id: "secret4453453",
      type: "С проверкой эксперта",
      group: "Философия",
      title: "Философия нашего времени",
      status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
    },
    secret6: {
      id: "secret534534",
      type: "С проверкой эксперта",
      group: "Философия",
      title: "Гуманизм",
      status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
      created: "15 март. 2025г.",
      updated: "15 март. 2025г.",
      description: "небольшое описание",
      currentQuestion: "Ваш вопрос",
      author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
    },
  })

  const questionsArr = useMemo(() => Object.values(questions), [questions])

  const addQuestion = (question: QuestionType) => {
    setQuestions((prev) => ({ ...prev, [question.id]: question }))
  }

  return { questions, questionsArr, addQuestion }
}
