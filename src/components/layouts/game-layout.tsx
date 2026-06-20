import { BellIcon, TableOfContentsIcon } from "lucide-react"
import { Button } from "../ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarProvider,
} from "../ui/sidebar"
import { useLocation, useNavigate } from "react-router-dom"
import clsx from "clsx"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

type GameLayoutProps = {
  isGameDesigner?: boolean
  children: React.ReactNode
}

export function GameLayout({ children }: GameLayoutProps) {
  const navigate = useNavigate()
  const pathnames = useLocation().pathname.split("/")

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="z-90 min-h-screen min-w-[250px]">
        <SidebarContent className="px-6 py-9">
          <SidebarGroup className="space-y-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/gd/expert")}
              className={clsx(
                pathnames.includes("expert") && "bg-secondary",
                "justify-start gap-3 pl-1 text-[16px]"
              )}
            >
              <div className="size-8 rounded-md bg-white! p-1">
                <TableOfContentsIcon className="size-full text-icon" />
              </div>
              Вселенные
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 pl-1 text-[16px]"
                >
                  <div className="size-8 rounded-md bg-white! p-1">
                    <BellIcon className="size-full text-icon" />
                  </div>
                  Уведомления
                </Button>
              </DialogTrigger>
              <DialogContent className="top-1/2 left-1/4 ml-2 h-[calc(100vh-32px)]">
                <DialogHeader>
                  <DialogTitle className="text-lg">Уведомления</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex min-h-screen w-full flex-col">
        <main>{children}</main>
      </div>
    </SidebarProvider>
  )
}
