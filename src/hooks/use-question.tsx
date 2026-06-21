import { AuthorContainer, StatusBadge } from "@/components/question-table"
import { QuestionStatuses, type QuestionType } from "@/lib/types&constants"
import { useMemo, useState } from "react"

export function useQuestion() {
  const [questions, setQuestions] = useState<Record<string, QuestionType>>({
    secret1: {
      id: "secret1",
      type: "С проверкой эксперта",
      group: "Английский язык",
      title: "Времена английского языка",
      status: <StatusBadge status={QuestionStatuses.new} />,
      created: "16/06/2026",
      updated: "17/06/2026",
      description:
        "В английском языке используют множество времен для описания прошедшего, настоящего или будущего",
      currentQuestion: "Сколько времен существует для описания прошедшего?",
      author: <AuthorContainer name="Роман Бурашнов" shortName="РБ" />,
    },
    secret42342: {
      id: "secret42342",
      type: "С проверкой эксперта",
      group: "Английский язык",
      title: "Местоимения",
      status: <StatusBadge status={QuestionStatuses.saved} />,
      created: "16/06/2026",
      updated: "16/06/2026",
      description: "Перечислите личные местоимения, которые вы знаете",
      currentQuestion: "Назовите личные местоимения",
      author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
    },
    secret2: {
      id: "secret2",
      type: "С проверкой эксперта",
      group: "Русский язык",
      title: "Грамматика и Пунктуация",
      status: <StatusBadge status={QuestionStatuses.new} />,
      created: "16/06/2026",
      updated: "16/06/2026",
      description: "Вам нужно выделить корень в предложенном сломе",
      currentQuestion: "Каков корень в слове 'ОКЕАНИЧЕСКИЙ'?",
      author: <AuthorContainer name="Методист Софья" shortName="МС" />,
    },
    secret18: {
      id: "secret18",
      type: "С проверкой эксперта",
      group: "Русский язык",
      title: "Падежи и склонения",
      status: <StatusBadge status={QuestionStatuses.on_review} />,
      created: "16/06/2026",
      updated: "16/06/2026",
      description:
        "Существуют несколько падежей для форм окончания существительных...",
      currentQuestion: "Сколько падежей в Русском языке?",
      author: <AuthorContainer name="Методист Софья" shortName="МС" />,
    },
    secret3: {
      id: "secret3",
      type: "С проверкой эксперта",
      group: "Философия",
      title: "Философия Древнего Востока",
      status: <StatusBadge status={QuestionStatuses.saved} />,
      created: "16/06/2026",
      updated: "16/06/2026",
      description:
        "Выделите 3 основные движения, существовавшие во времена Древнего Востока, Китая",
      currentQuestion: "Выделите 3 основные движения",
      author: <AuthorContainer name="Новый методист" shortName="НМ" />,
    },
    secret4453453: {
      id: "secret4453453",
      type: "С проверкой эксперта",
      group: "Философия",
      title: "Философия нашего времени",
      status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
      created: "16/06/2026",
      updated: "16/06/2026",
      description:
        "Назовите основные направления для изучения в философии нашего времени",
      currentQuestion: "Назовите основные направления",
      author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
    },
    secret534534: {
      id: "secret534534",
      type: "С проверкой эксперта",
      group: "Философия",
      title: "Гуманизм",
      status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
      created: "16/06/2026",
      updated: "16/06/2026",
      description: "Дайте определение термину 'Гуманизм'",
      currentQuestion: "Определение",
      author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
    },
  })

  const questionsArr = useMemo(() => Object.values(questions), [questions])

  const addQuestion = (question: QuestionType) => {
    setQuestions((prev) => ({ ...prev, [question.id]: question }))
  }

  return { questions, questionsArr, addQuestion }
}
