import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthenticationPage from '../features/auth/pages/AuthenticationPage.tsx';
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage.tsx";
import LandingPage from "../features/ui/pages/LandingPage.tsx";
import AboutPage from "../features/ui/pages/AboutPage.tsx";
import PricingPage from "../features/ui/pages/PricingPage.tsx";
import LoginForm from "@/features/auth/components/LoginForm.tsx";
import SignUpForm from "@/features/auth/components/SignUpForm.tsx";
import HomePage from "../features/ui/pages/HomePage.tsx";
import { Box } from "@chakra-ui/react";
import {useTheme} from "next-themes";
import {useEffect} from "react";

function App() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", resolvedTheme ?? "light");
    }, [resolvedTheme]);

    return (
        <Box minH="100vh" bg="surface.primary">
            <BrowserRouter>
                <Routes>
                    <Route path={import.meta.env.VITE_LANDING_URL} element={<LandingPage/>} />
                    <Route path={import.meta.env.VITE_HOME_URL} element={<HomePage/>} />
                    <Route path={import.meta.env.VITE_ABOUT_URL} element={<AboutPage/>} />
                    <Route path={import.meta.env.VITE_PRICING_URL} element={<PricingPage/>} />
                    <Route path={import.meta.env.VITE_AUTH_URL} element={<AuthenticationPage />}>
                        <Route path={import.meta.env.VITE_LOGIN_URL} element={<LoginForm />} />
                        <Route path={import.meta.env.VITE_SIGNUP_URL} element={<SignUpForm />} />
                    </Route>
                    <Route path={import.meta.env.VITE_FORGOT_PASSWORD_URL} element={<ForgotPasswordPage/>} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App
