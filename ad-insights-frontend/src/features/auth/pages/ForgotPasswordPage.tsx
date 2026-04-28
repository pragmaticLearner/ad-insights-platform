import {Box, Button, Card, Field, Input, Stack} from "@chakra-ui/react";
import {useNavigate} from "react-router";


export default function ForgotPasswordPage() {
    const navigate = useNavigate();

    function onCancel() {
        console.log("Cancelled");
        navigate("/login");
    }

    async function onReset() {
        console.log("Reset");
        await fetch("auth/forgot-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: "some value",
            }),
        });

        alert("If an account exists, a reset link has been sent.");
    }

    return (
        <Box
            w="full"
            maxW="500px"
            mx="auto"
            paddingLeft={"100px"}
            paddingTop={"250px"}
        >
            <Card.Root maxW="full" mx="auto" p={8}>
                <Card.Header>
                    <Card.Title>Password Reset</Card.Title>
                    <Card.Description>
                        Provide the email address associated with your account to reset your password.
                    </Card.Description>
                </Card.Header>
                <Card.Body>
                    <Stack gap="4" w="full">
                        <Field.Root>
                            <Field.Label>Email</Field.Label>
                            <Input required={true}/>
                        </Field.Root>
                    </Stack>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Button variant="outline" onClick={onCancel}>Cancel</Button>
                    <Button variant="solid" onClick={onReset}>Reset</Button>
                </Card.Footer>
            </Card.Root>
        </Box>
    );
}
