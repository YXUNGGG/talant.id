import { AuthorContainer, StatusBadge } from "@/components/question-table"
import { QuestionStatuses } from "./types&constants"

export const users = [
  {
    id: "34burashnov",
    name: "Роман Бурашнов",
    shortName: "РБ",
    email: "burashnov.roman@mail.ru",
    roles: ["Игрок", "Админ", "Методист", "Эксперт"],
    currencies: ["Крона", "Евро"],
    games: ["Математика", "Русский"],
  },
  {
    id: "smirnova",
    name: "Анна Смирнова",
    shortName: "АС",
    email: "a.smirnova@mail.ru",
    roles: ["Игрок", "Админ"],
    currencies: ["Крона", "Евро"],
    games: ["Математика", "Русский"],
  },
  {
    id: "burashnov234234",
    name: "Роман Бурашнов 1",
    shortName: "РБ",
    email: "burashnov.roman@mail.ru",
    roles: ["Игрок", "Админ", "Методист", "Эксперт"],
    currencies: ["Крона", "Евро"],
    games: ["Математика", "Русский"],
  },
  {
    id: "smirnova444",
    name: "Анна Смирнова",
    shortName: "АС",
    email: "a.smirnova@mail.ru",
    roles: ["Игрок", "Админ"],
    currencies: ["Крона", "Евро"],
    games: ["Математика", "Русский"],
  },
  {
    id: "burashnov01010",
    name: "Роман Бурашнов",
    shortName: "РБ",
    email: "burashnov.roman@mail.ru",
    roles: ["Игрок", "Админ", "Методист", "Эксперт"],
    currencies: ["Крона", "Евро"],
    games: ["Математика", "Русский"],
  },
  {
    id: "smirnovanoynoy",
    name: "Анна Смирнова",
    shortName: "АС",
    email: "a.smirnova@mail.ru",
    roles: ["Игрок", "Админ"],
    currencies: ["Крона", "Евро"],
    games: ["Математика", "Русский"],
  },
]

export const mentors = [
  {
    value: "english",
    title: "Английский язык",
    participants: [
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
    ],
  },
  {
    value: "russian",
    title: "Русский язык",
    participants: [
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
    ],
  },
]

export const players = [
  {
    value: "english",
    title: "Английский язык",
    participants: [
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
    ],
    games: ["Название игры", "Инглиш", "Математика", "Тест 22.12"],
  },
  {
    value: "russian",
    title: "Русский язык",
    participants: [
      {
        name: "Роман Бурашнов",
        shortName: "РБ",
      },
      {
        name: "Анна Смирнова",
        shortName: "АС",
      },
    ],
    games: ["Математика", "Тест 22.12"],
  },
]

export const filters = [
  "Автор",
  "Тип вопроса",
  "Статус",
  "Создано с",
  "Создано до",
]
export const questions = [
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.new} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Роман Бурашнов" shortName="РБ" />,
  },
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.on_review} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Методист Софья" shortName="МС" />,
  },
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.saved} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Новый методист" shortName="НМ" />,
  },
  {
    type: "С проверкой эксперта",
    group: "Английский Язык",
    theme: "Времена английского глагола",
    status: <StatusBadge status={QuestionStatuses.need_to_fix} />,
    created: "15 март. 2025г.",
    updated: "15 март. 2025г.",
    author: <AuthorContainer name="Специалист Русский" shortName="СР" />,
  },
]
