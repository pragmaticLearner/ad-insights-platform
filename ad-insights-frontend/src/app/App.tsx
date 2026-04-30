import {Route, BrowserRouter, Routes} from "react-router";
import LoginPage from '../features/auth/pages/LoginPage.tsx';
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage.tsx";
import LandingPage from "@/features/auth/pages/LandingPage.tsx";
import AboutPage from "@/features/auth/pages/AboutPage.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<LandingPage/>} />
              <Route path={"/about"} element={<AboutPage/>} />
              <Route path={"/login"} element={<LoginPage/>} />
              <Route path={"/forgot-password"} element={<ForgotPasswordPage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
