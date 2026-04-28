import {Route, BrowserRouter, Routes} from "react-router";
import LoginPage from '../features/auth/pages/LoginPage.tsx';
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<LoginPage/>} />
              <Route path={"/login"} element={<LoginPage/>} />
              <Route path={"/forgot-password"} element={<ForgotPasswordPage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
