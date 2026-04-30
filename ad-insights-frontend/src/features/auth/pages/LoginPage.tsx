import {Text, Heading, Tabs, Box, VStack} from "@chakra-ui/react";
import {useState} from "react";
import LoginForm from "@/features/auth/components/LoginForm.tsx";
import SignUpForm from "@/features/auth/components/SignUpForm.tsx";
import SiteLogo from "@/components/SiteLogo.tsx"

export default function LoginPage() {
    const [tabs, setTabs] = useState("tab-1");

    const header = tabs === "tab-1" ?
        <Heading textStyle={"title"}>Log in to your account</Heading> :
        <Heading textStyle={"title"}>Welcome!</Heading>

    const displayText = tabs === "tab-1" ?
        <Text textStyle={"subtitle"}>Welcome back!</Text> :
        <Text textStyle={"subtitle"}>Please enter your details to sign up</Text>

    const credentials = tabs === "tab-1" ?
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
                    defaultValue="tab-1"
                >
                    <Tabs.List>
                        <Tabs.Trigger value="tab-1">Log in</Tabs.Trigger>
                        <Tabs.Trigger value="tab-2">Sign up</Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>

                {credentials}

            </VStack>
        </Box>

    );
}
