import {
  BellIcon,
  Gamepad2Icon,
  GraduationCapIcon,
  ShieldUserIcon,
  UserSearchIcon,
} from "lucide-react"
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
import { ExitButton } from "../exit-button"

type MainLayoutProps = {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate()
  const pathnames = useLocation().pathname.split("/")
  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="z-90 min-h-screen min-w-[250px]">
        <SidebarContent className="flex flex-col justify-between px-6 py-9">
          <SidebarGroup className="space-y-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/main/admin")}
              className={clsx(
                pathnames.includes("admin") && "bg-secondary",
                "justify-start gap-3 pl-1 text-[16px]"
              )}
            >
              <div className="size-8 rounded-md bg-white! p-1">
                <ShieldUserIcon className="size-full text-icon" />
              </div>
              Админ
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate("/main/expert")}
              className={clsx(
                pathnames.includes("expert") && "bg-secondary",
                "justify-start gap-3 pl-1 text-[16px]"
              )}
            >
              <div className="size-8 rounded-md bg-white! p-1">
                <UserSearchIcon className="size-full text-icon" />
              </div>
              Эксперт
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate("/main/methodist")}
              className={clsx(
                pathnames.includes("methodist") && "bg-secondary",
                "justify-start gap-3 pl-1 text-[16px]"
              )}
            >
              <div className="size-8 rounded-md bg-white! p-1">
                <GraduationCapIcon className="size-full text-icon" />
              </div>
              Методист
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate("/main/gamedesigner")}
              className={clsx(
                pathnames.includes("gamedesigner") && "bg-secondary",
                "justify-start gap-3 pl-1 text-[16px]"
              )}
            >
              <div className="size-8 rounded-md bg-white! p-1">
                <Gamepad2Icon className="size-full text-icon" />
              </div>
              Геймдизайнер
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
          <SidebarGroup className="p-0">
            <ExitButton />
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex min-h-screen w-full flex-col gap-4">
        <main className="h-[calc(100vh-96px)]">{children}</main>
      </div>
    </SidebarProvider>
  )
}
