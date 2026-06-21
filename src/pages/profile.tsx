import { ProfileCard } from "@/components/profile-card"
import { SettingsCard } from "@/components/settings-card"
import { useState } from "react"

export type ProfileUserType = {
  name: string
  shortName: string
  email: string
}

export type ProfileResourcesType = {
  GitBucket: string
  Work: string
  Redmain: string
}

export function ProfilePage() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [resources, setResources] = useState({
    GitBucket: "",
    Work: "https://work.students.it-college.ru/repo/i22s0633/",
    Redmain: "https://pm.students.it-college.ru/users/70",
  })
  const [user, setUser] = useState({
    name: "Бурашнов Роман",
    shortName: "БР",
    email: "burashnov.roman@yandex.ru",
  })

  return (
    <div className="flex justify-center py-13">
      {isSettingsOpen ? (
        <SettingsCard
          user={user}
          resources={resources}
          setUser={(user) => setUser(user)}
          setResources={(res) => setResources(res)}
          close={() => setIsSettingsOpen(false)}
        />
      ) : (
        <ProfileCard
          user={user}
          resources={resources}
          openSettings={() => setIsSettingsOpen(true)}
        />
      )}
    </div>
  )
}
