import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/login"
import { StudentLayout } from "./components/student-layout"
import { AdminPage } from "./pages/admin"
import { MainLayout } from "./components/main-layout"
import { MainPage } from "./pages/main"
import { MethodistPage } from "./pages/methodist"
import { ExpertPage } from "./pages/expert"

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
              </Routes>
            </MainLayout>
          </>
        }
      />
      <Route
        path="/student/*"
        element={
          <>
            <StudentLayout>
              <Route path="universe" element />
            </StudentLayout>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/main" replace />} />
    </Routes>
  )
}
