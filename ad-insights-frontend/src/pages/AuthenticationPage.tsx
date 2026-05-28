import {Text, Heading, Tabs, Box, VStack} from "@chakra-ui/react";
import SiteLogo from "../shared/components/SiteLogo.tsx"
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function AuthenticationPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const isSignup = location.pathname.includes("signup");

    return (
        <Box w="full" maxW="400px" mx="auto" p={8}>
            <VStack gap={6} align="stretch">

                <SiteLogo />

                {isSignup ? (
                    <>
                        <Heading textStyle="title">Welcome!</Heading>
                        <Text textStyle="subtitle">Please enter your details to sign up</Text>
                    </>
                ) : (
                    <>
                        <Heading textStyle="title">Log in to your account</Heading>
                        <Text textStyle="subtitle">Welcome back!</Text>
                    </>
                )}

                <Tabs.Root
                    value={isSignup ? "signup" : "login"}
                    onValueChange={(e) => {
                        navigate(e.value === "signup" ? import.meta.env.VITE_SIGNUP_URL : import.meta.env.VITE_LOGIN_URL);
                    }}
                    variant="enclosed"
                    fitted
                >
                    <Tabs.List>
                        <Tabs.Trigger value="login">Log in</Tabs.Trigger>
                        <Tabs.Trigger value="signup">Sign up</Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>

                <Outlet />

            </VStack>
        </Box>
    );
}
