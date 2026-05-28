import {Box, Button, Card, Field, Input, VStack} from "@chakra-ui/react";
import {useNavigate} from "react-router";
import {forgotPassword} from "@/features/auth/api/authApi.ts";
import type {ForgotPasswordRequest, LoginRequest} from "../features/auth/types.ts";
import {useForm} from "react-hook-form";
import {useState} from "react";


export default function ForgotPasswordPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    async function onSubmit(request: ForgotPasswordRequest) {
        console.log("clicked");
        await forgotPassword(request)
        setIsSubmitted(true);
    }

    return (
        <Box w="full" maxW="500px" mx="auto" paddingLeft={"100px"} paddingTop={"250px"}>
            <Card.Root maxW="full" mx="auto" p={8}>
                <Card.Header>
                    <Card.Title>Password Reset</Card.Title>
                    <Card.Description>
                        {isSubmitted
                            ? "Check your inbox for further instructions."
                            : "Provide the email address associated with your account."}
                    </Card.Description>
                </Card.Header>

                <Card.Body>
                    {isSubmitted ? (
                        <Box py={4} fontWeight="medium">
                            If an account exists, a reset link has been sent to your email.
                        </Box>
                    ) : (
                        <form id="reset-form" onSubmit={handleSubmit(onSubmit)}>
                            <VStack gap="4" w="full">
                                <Field.Root invalid={!!errors.email}>
                                    <Field.Label>Email:</Field.Label>
                                    <Input {...register("email", {
                                        required: "Email is required to reset a password",
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Provide a valid email address" }
                                    })} />
                                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                                </Field.Root>
                            </VStack>
                        </form>
                    )}
                </Card.Body>

                <Card.Footer justifyContent="flex-end">
                    {isSubmitted ? (
                        <Button onClick={() => navigate(-1)}>
                            Return to Login
                        </Button>
                    ) : (
                        <>
                            <Button variant="outline" onClick={() => navigate(-1)} mr={2}>Cancel</Button>
                            <Button type="submit" form="reset-form">Reset Password</Button>
                        </>
                    )}
                </Card.Footer>
            </Card.Root>
        </Box>
    );
}
