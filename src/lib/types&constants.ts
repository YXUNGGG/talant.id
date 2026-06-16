import type { users } from "./data"

export type UserType = (typeof users)[number]

export const Roles = {
  student: "Игрок",
  admin: "Админ",
  methodist: "Методист",
  expert: "Эксперт",
  gamedesigner: "Геймдизайнер",
} as const

export type RoleValueType = keyof typeof Roles
export type RoleLabelType = (typeof Roles)[keyof typeof Roles]

export const QuestionStatuses = {
  new: "Новый",
  saved: "Сохраненный",
  on_review: "на проверке",
  need_to_fix: "Необходимо исправить",
} as const

export type QuestionStatuses =
  (typeof QuestionStatuses)[keyof typeof QuestionStatuses]

export const QuestionTypes = {
  expart_review: "С проверкой эксперта",
  answer_options: "С вариантами ответа",
  missed_words: "С пропущенными словами",
  couple_words: "С парами слов",
} as const

export type QuestionTypes = (typeof QuestionTypes)[keyof typeof QuestionTypes]
