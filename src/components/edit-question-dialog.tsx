import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { AuthorContainer, StatusBadge } from "./question-table"
import {
  QuestionStatuses,
  QuestionTypes,
  type QuestionType,
} from "@/lib/types&constants"
import { mentors } from "@/lib/data"
import { useState } from "react"
import { CircleArrowUpIcon } from "lucide-react"

const author = { name: "Роман Бурашнов", shortName: "РБ" }

type EditQuestionDialogProps = {
  isExert?: boolean
  addQuestion: (question: QuestionType) => void
  trigger: React.ReactElement
  initialValue?: QuestionType
}

export function EditQuestionDialog({
  trigger,
  initialValue,
  isExert = false,
  addQuestion,
}: EditQuestionDialogProps) {
  const [form, setForm] = useState(
    initialValue || {
      type: QuestionTypes.expert_review as QuestionTypes,
      group: "",
      title: "",
      comment: "",
      description: "",
      currentQuestion: "",
    }
  )

  const confirmQuestion = (status: QuestionStatuses) => {
    addQuestion({
      ...form,
      status: <StatusBadge status={status} />,
      created: initialValue?.created || new Date().toLocaleDateString(),
      updated: new Date().toLocaleDateString(),
      author: <AuthorContainer {...author} />,
      description: form.description,
      currentQuestion: form.currentQuestion,
      id: initialValue?.id || Date.now().toString(),
    })
  }

  const isMainActionEnabled =
    form.type &&
    form.title &&
    form.group &&
    form.description &&
    form.currentQuestion

  const isQuestionStatusConfirmed =
    initialValue?.status.props.status === QuestionStatuses.new ||
    initialValue?.status.props.status === QuestionStatuses.on_review

  const mentorControllers = [
    <Button
      variant="primary"
      onClick={() => confirmQuestion(QuestionStatuses.saved)}
      className="bg-transparent px-5 hover:bg-primary/1"
    >
      Сохранить
    </Button>,

    <Button
      onClick={() => confirmQuestion(QuestionStatuses.on_review)}
      disabled={!isMainActionEnabled || isQuestionStatusConfirmed}
      className="px-5"
    >
      На проверку
    </Button>,
  ]

  const expertControllers = [
    <Button
      variant="primary"
      onClick={() => confirmQuestion(QuestionStatuses.need_to_fix)}
      className="bg-transparent px-5 hover:bg-primary/1"
    >
      На доработку
    </Button>,

    <Button
      disabled={!isMainActionEnabled}
      aria-disabled={!isMainActionEnabled}
      onClick={() => confirmQuestion(QuestionStatuses.new)}
      className="px-5"
    >
      Опубликовать
    </Button>,
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-[560px] gap-0 p-0">
        <DialogHeader className="p-5">
          <DialogTitle>Редактирование вопроса</DialogTitle>
          <DialogDescription>
            {initialValue?.status || (
              <StatusBadge status={QuestionStatuses.new} />
            )}
          </DialogDescription>
        </DialogHeader>

        <FieldGroup className="bg-background p-5">
          <Field>
            <FieldLabel htmlFor="question-type">Тип вопроса</FieldLabel>
            <Select
              disabled={isExert}
              name="question-type"
              value={form.type}
              defaultValue={form.type}
              onValueChange={(val) =>
                setForm((prev) => ({ ...prev, type: val as QuestionTypes }))
              }
            >
              <SelectTrigger className="h-8 w-full" id="question-type">
                <SelectValue placeholder="Выберите тип вопроса" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.entries(QuestionTypes).map(([value, label]) => (
                    <SelectItem key={value} value={label}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="title">Название</FieldLabel>
            <Input
              disabled={isExert}
              name="title"
              id="title"
              placeholder="Название"
              className="h-9 text-sm"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="file">Загрузите файлы</FieldLabel>
            <div className="flex h-16 cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed bg-card">
              <CircleArrowUpIcon />
              <p className="text-muted-foreground">
                Перетащите файлы сюда или{" "}
                <span className="underline">выберите файл</span>
              </p>
            </div>
            <FieldDescription className="flex justify-between text-xs">
              <p>Формат файлов: JPEG, PNG, MP3</p>
              <p>Максимальный размер: 5MB</p>
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="mentors-group">Группа менторов</FieldLabel>
            <Select
              disabled={isExert}
              name="mentors-group"
              value={form.group}
              onValueChange={(val) =>
                setForm((prev) => ({ ...prev, group: val }))
              }
            >
              <SelectTrigger className="h-8 w-full" id="mentors-group">
                <SelectValue placeholder="Выберите группу менторов" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {mentors.map((mentor) => (
                    <SelectItem key={mentor.value} value={mentor.title}>
                      {mentor.title}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Описание</FieldLabel>
            <Textarea
              name="description"
              id="description"
              placeholder="Описание"
              disabled={isExert}
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="question">Вопрос</FieldLabel>
            <Textarea
              name="question"
              id="question"
              placeholder="Вопрос"
              disabled={isExert}
              value={form.currentQuestion}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  currentQuestion: e.target.value,
                }))
              }
            />
          </Field>

          {(isExert ||
            initialValue?.status.props.status ===
              QuestionStatuses.need_to_fix) && (
            <Field>
              <FieldLabel htmlFor="comment">Комментарий</FieldLabel>
              <Textarea
                name="comment"
                id="comment"
                placeholder="Введите комментарий"
                value={form.comment}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    comment: e.target.value,
                  }))
                }
              />
            </Field>
          )}
        </FieldGroup>

        <DialogFooter className="flex justify-end gap-2 p-5">
          {(isExert ? expertControllers : mentorControllers).map((button) => (
            <DialogClose>{button}</DialogClose>
          ))}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
