import {Route, BrowserRouter, Routes} from "react-router-dom";
import AuthenticationPage from '../features/auth/pages/AuthenticationPage.tsx';
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage.tsx";
import LandingPage from "@/features/auth/pages/LandingPage.tsx";
import AboutPage from "@/features/auth/pages/AboutPage.tsx";
import PricingPage from "@/features/auth/pages/PricingPage.tsx";
import LoginForm from "@/features/auth/components/LoginForm.tsx";
import SignUpForm from "@/features/auth/components/SignUpForm.tsx";
import HomePage from "../features/auth/pages/HomePage.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={import.meta.env.VITE_LANDING_URL} element={<LandingPage/>} />
              <Route path={import.meta.env.VITE_HOME_URL} element={<HomePage/>} />
              <Route path={import.meta.env.VITE_ABOUT_URL} element={<AboutPage/>} />
              <Route path={import.meta.env.VITE_PRICING_URL} element={<PricingPage/>} />
              <Route path={import.meta.env.VITE_AUTH_URL} element={<AuthenticationPage />}>
                  <Route path={import.meta.env.VITE_LOGIN_URL} element={<LoginForm />} />
                  <Route path={import.meta.env.VITE_SIGNUP_URL} element={<SignUpForm />} />
                  <Route index element={<LoginForm />} />
              </Route>
              <Route path={import.meta.env.VITE_FORGOT_PASSWORD} element={<ForgotPasswordPage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
