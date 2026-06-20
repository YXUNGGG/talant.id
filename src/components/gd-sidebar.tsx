import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { PlusIcon } from "lucide-react"
import { Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar"
import { Button } from "./ui/button"
import { useQuestion } from "@/hooks/useQuestion"
import { type QuestionType } from "@/lib/types&constants"
import { useMemo } from "react"
import { QuestionDialog } from "./question-dialog"

type GDSidebarProps = {
  questionGroup: QuestionType[]
  setQuestionGroup: (val: QuestionType[]) => void
  setGroupNode: (val: QuestionType[]) => void
}

export function GDSidebar({
  setGroupNode,
  questionGroup,
  setQuestionGroup,
}: GDSidebarProps) {
  const { questionsArr } = useQuestion()

  const groupsOfQuestions = useMemo(() => {
    const groups: Record<string, QuestionType[]> = {}
    questionsArr.forEach((question) => {
      const groupKey = question.group

      if (!groups[groupKey]) {
        groups[groupKey] = [question]
      } else {
        groups[groupKey].push(question)
      }
    })
    return groups
  }, [])

  return (
    <Sidebar
      collapsible="none"
      side="right"
      className="min-w-90 border-0! py-8"
    >
      <SidebarHeader className="pt-0 font-semibold">
        <h2 className="text-xl">Название вселенной</h2>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <FieldGroup>
          <Field className="flex flex-wrap gap-1" orientation="horizontal">
            <FieldLabel className="w-full">Координаты</FieldLabel>
            <InputGroup className="flex-1 gap-1.5">
              <InputGroupInput className="h-8" defaultValue={52} />
              <InputGroupAddon className="pl-2.5 leading-3 text-muted-foreground/70">
                x
              </InputGroupAddon>
            </InputGroup>
            <InputGroup className="flex-1 gap-1.5">
              <InputGroupInput className="h-8" defaultValue={-2} />
              <InputGroupAddon className="pl-2.5 leading-3 text-muted-foreground/70">
                y
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="question-group">Группа вопросов</FieldLabel>
            <Select
              value={questionGroup?.[0]?.group}
              onValueChange={(val) => setQuestionGroup(groupsOfQuestions[val])}
            >
              <SelectTrigger className="h-8 w-full" id="question-type">
                <SelectValue placeholder="Группа вопросов" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {Object.keys(groupsOfQuestions).map((groupName, idx) => (
                    <SelectItem key={groupName + idx} value={groupName}>
                      {groupName}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>Вопросы</FieldLabel>
            {questionGroup.map((question) => (
              <QuestionDialog question={question} isStudent={false}>
                <Button
                  key={question.id}
                  className="h-8 w-full justify-start bg-card text-foreground hover:bg-mauve-200"
                >
                  {question.title}
                </Button>
              </QuestionDialog>
            ))}
          </Field>

          <Field>
            <FieldLabel>Вознаграждение</FieldLabel>
            <Button className="w-full" variant="primary">
              <PlusIcon /> Добавить вознаграждение
            </Button>
          </Field>

          <Field>
            <FieldLabel>Дочерние ноды</FieldLabel>
            <Button
              disabled={!questionGroup.length}
              className="w-full"
              variant="primary"
              onClick={() => setGroupNode(questionGroup)}
            >
              <PlusIcon /> Добавить ноду
            </Button>
          </Field>

          <Field>
            <FieldLabel>Активные</FieldLabel>
            <Button
              size="sm"
              className="hover h-8 w-full justify-start bg-card text-foreground hover:bg-black/5"
            >
              Дочерняя нода
            </Button>
            <Button
              size="sm"
              className="hover h-8 w-full justify-start bg-card text-foreground hover:bg-black/5"
            >
              Дочерняя нода
            </Button>
          </Field>

          <Field>
            <FieldLabel>Неактивные</FieldLabel>
            <Button
              size="sm"
              className="hover h-8 w-full justify-start bg-card text-foreground hover:bg-black/5"
            >
              Дочерняя нода 4
            </Button>
            <Button
              size="sm"
              className="hover h-8 w-full justify-start bg-card text-foreground hover:bg-black/5"
            >
              Дочерняя нода 29
            </Button>
          </Field>
        </FieldGroup>
      </SidebarContent>
    </Sidebar>
  )
}
