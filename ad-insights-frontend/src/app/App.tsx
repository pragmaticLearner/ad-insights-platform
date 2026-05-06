import {Route, BrowserRouter, Routes} from "react-router-dom";
import AuthenticationPage from '../features/auth/pages/AuthenticationPage.tsx';
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage.tsx";
import LandingPage from "@/features/auth/pages/LandingPage.tsx";
import AboutPage from "@/features/auth/pages/AboutPage.tsx";
import PricingPage from "@/features/auth/pages/PricingPage.tsx";
import Homepage from "@/features/auth/pages/Homepage.tsx";
import LoginForm from "@/features/auth/components/LoginForm.tsx";
import SignUpForm from "@/features/auth/components/SignUpForm.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<LandingPage/>} />
              <Route path={"/about"} element={<AboutPage/>} />
              <Route path={"/pricing"} element={<PricingPage/>} />
              <Route path="/auth" element={<AuthenticationPage />}>
                  <Route path="login" element={<LoginForm />} />
                  <Route path="signup" element={<SignUpForm />} />
                  <Route index element={<LoginForm />} />
              </Route>
              <Route path={"/forgot-password"} element={<ForgotPasswordPage/>} />

              <Route path={"/home"} element={<Homepage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
