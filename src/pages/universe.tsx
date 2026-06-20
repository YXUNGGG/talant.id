import { GDSidebar } from "@/components/gd-sidebar"
import { AuthorContainer, StatusBadge } from "@/components/question-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { UniverseBranches } from "@/components/universe-branches"
import { QuestionStatuses, type QuestionType } from "@/lib/types&constants"
import { useState } from "react"

type UniversePageProps = {
  isExpert?: boolean
}

export function UniversePage({ isExpert = false }: UniversePageProps) {
  const [questionGroup, setQuestionGroup] = useState<QuestionType[]>([])
  const [nodes, setNodes] = useState<QuestionType[][]>([
    [
      {
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
      {
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
    ],
  ])

  return (
    <SidebarProvider
      className="h-[calc(100vh-96px)]"
      style={
        {
          "--sidebar": "#F9F5FF",
        } as React.CSSProperties
      }
    >
      <Sidebar
        collapsible="none"
        side="left"
        className="left-62.5! min-w-[250px] border-0! py-8"
      >
        <SidebarHeader className="pt-0 font-semibold">
          <h2 className="text-xl">Вселенные</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="space-y-6">
            <Input placeholder="Поиск" className="h-8" />
            <div className="space-y-2">
              <Button
                className="w-full justify-start hover:bg-primary/10"
                variant="ghost"
                size="sm"
              >
                Название вселенной
              </Button>
              <Button
                className="w-full justify-start hover:bg-primary/10"
                variant="ghost"
                size="sm"
              >
                Первая вселенная
              </Button>
              <Button
                className="w-full justify-start hover:bg-primary/10"
                variant="ghost"
                size="sm"
              >
                Вторая вселенная
              </Button>
            </div>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <div className="min-h-screen w-full bg-[#E9D7FE]">
        <UniverseBranches
          nodes={nodes}
          setNodes={setNodes}
          setActiveNode={setQuestionGroup}
        />
      </div>

      {isExpert && (
        <GDSidebar
          questionGroup={questionGroup}
          setQuestionGroup={setQuestionGroup}
          setGroupNode={(node) => setNodes((prev) => [...prev, node])}
        />
      )}
    </SidebarProvider>
  )
}
