import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { AdminPage } from "./pages/admin"
import { MainLayout } from "./components/layouts/main-layout"
import { MainPage } from "./pages/main"
import { MethodistPage } from "./pages/methodist"
import { ExpertPage } from "./pages/expert"
import { GameLayout } from "./components/layouts/game-layout"
import { UniversePage } from "./pages/universe"

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
                <Route path="methodist" element={<MethodistPage />} />
                <Route path="expert" element={<ExpertPage />} />
                <Route
                  path="gamedesigner"
                  element={<UniversePage isExpert />}
                />
              </Routes>
            </MainLayout>
          </>
        }
      />
      <Route
        path="/student/*"
        element={
          <>
            <GameLayout>
              <Route path="universe" element />
            </GameLayout>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  )
}
