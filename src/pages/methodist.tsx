import { QuestionTable, StatusBadge } from "@/components/question-table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
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
import { filters, mentors, questions } from "@/lib/data"
import { QuestionStatuses, QuestionTypes } from "@/lib/types&constants"
import { PlusIcon } from "lucide-react"

export function MethodistPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg">Вопросы</h2>
      <div className="flex gap-1.5">
        {filters.map((filter, idx) => (
          <Badge
            key={filter + idx}
            className="h-6 rounded-sm bg-card text-foreground"
          >
            {filter}
          </Badge>
        ))}
      </div>

      <QuestionTable questions={questions} />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="primary"
            className="h-11 w-full bg-transparent hover:bg-primary/10"
          >
            <PlusIcon />
            Создать вопрос
          </Button>
        </DialogTrigger>
        <DialogContent className="gap-0 p-0">
          <DialogHeader className="p-5">
            <DialogTitle>Редактирование вопроса</DialogTitle>
            <DialogDescription>
              <StatusBadge status={QuestionStatuses.new} />
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="bg-background p-5">
            <Field>
              <FieldLabel htmlFor="question-type">Тип вопроса</FieldLabel>
              <Select name="question-type">
                <SelectTrigger className="h-9 w-full" id="question-type">
                  <SelectValue placeholder="Выберите тип вопроса" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {Object.entries(QuestionTypes).map(([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="title">Название</FieldLabel>
              <Input name="title" id="title" placeholder="Название" />
            </Field>

            <Field>
              <FieldLabel htmlFor="mentors-group">Группа менторов</FieldLabel>
              <Select name="mentors-group">
                <SelectTrigger className="h-9 w-full" id="mentors-group">
                  <SelectValue placeholder="Выберите группу менторов" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {mentors.map((mentor) => (
                      <SelectItem key={mentor.value} value={mentor.value}>
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
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="question">Вопрос</FieldLabel>
              <Textarea name="question" id="question" placeholder="Вопрос" />
            </Field>
          </FieldGroup>

          <DialogFooter className="flex justify-end gap-2 p-5">
            <Button
              variant="primary"
              className="bg-transparent px-5 hover:bg-primary/1"
            >
              Сохранить
            </Button>
            <Button disabled aria-disabled className="px-5">
              Опубликовать
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
