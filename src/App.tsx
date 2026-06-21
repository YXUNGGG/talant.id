import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPage } from "./pages/admin"
import { MainLayout } from "./components/layouts/main-layout"
import { MainPage } from "./pages/main"
import { MethodistPage } from "./pages/methodist"
import { ExpertPage } from "./pages/expert"
import { GameLayout } from "./components/layouts/game-layout"
import { UniversePage } from "./pages/universe"
import { QuestionContextProvider } from "./providers/question-context-provider"
import { ProfilePage } from "./pages/profile"
import { LoginPage } from "./pages/login"

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/main/*"
        element={
          <>
            <Routes>
              <Route path="" element={<MainPage />} />
            </Routes>

            <MainLayout>
              <Routes>
                <Route path="admin" element={<AdminPage />} />
                <Route
                  path="gamedesigner"
                  element={<UniversePage isExpert />}
                />
              </Routes>

              <QuestionContextProvider>
                <Routes>
                  <Route path="methodist" element={<MethodistPage />} />
                  <Route path="expert" element={<ExpertPage />} />
                </Routes>
              </QuestionContextProvider>
            </MainLayout>
          </>
        }
      />
      <Route
        path="/student/*"
        element={
          <GameLayout>
            <Routes>
              <Route
                path="universe"
                element={<UniversePage isExpert={false} />}
              />
              <Route path="profile" element={<ProfilePage />} />
            </Routes>
          </GameLayout>
        }
      />
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  )
}
