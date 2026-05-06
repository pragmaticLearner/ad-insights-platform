import {Text, Heading, Tabs, Box, VStack} from "@chakra-ui/react";
import {useState} from "react";
import LoginForm from "@/features/auth/components/LoginForm.tsx";
import SignUpForm from "@/features/auth/components/SignUpForm.tsx";
import SiteLogo from "@/components/SiteLogo.tsx"

export default function AuthenticationPage() {
    const [tabs, setTabs] = useState("login-tab");

    const header = tabs === "login-tab" ?
        <Heading textStyle={"title"}>Log in to your account</Heading> :
        <Heading textStyle={"title"}>Welcome!</Heading>

    const displayText = tabs === "login-tab" ?
        <Text textStyle={"subtitle"}>Welcome back!</Text> :
        <Text textStyle={"subtitle"}>Please enter your details to sign up</Text>

    const credentials = tabs === "login-tab" ?
        <LoginForm/> : <SignUpForm/>

    return (
        <Box w="full" maxW="400px" mx="auto" p={8}>
            <VStack gap={6} align="stretch">

                <SiteLogo/>
                {header}
                {displayText}

                <Tabs.Root
                    value={tabs}
                    onValueChange={(e) => setTabs(e.value)}
                    variant="enclosed"
                    fitted
                    defaultValue="login-tab"
                >
                    <Tabs.List>
                        <Tabs.Trigger value="login-tab">Log in</Tabs.Trigger>
                        <Tabs.Trigger value="signup-tab">Sign up</Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>

                {credentials}

            </VStack>
        </Box>

    );
}
