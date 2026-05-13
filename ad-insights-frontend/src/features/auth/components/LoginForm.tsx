import {Button, Field, HStack, Input, VStack, Text} from "@chakra-ui/react";
import { PasswordInput } from "@/features/auth/components/PasswordInput.tsx";
import { useForm } from "react-hook-form";
import RememberMeCheckbox from "@/features/auth/components/RememberMeCheckbox.tsx";
import ForgotPasswordLink from "@/features/auth/components/ForgotPasswordLink.tsx";
import {type JSX, useState} from "react";
import type {LoginRequest} from "./utils/LoginRequest.tsx";
import {useNavigate} from "react-router";
import {login} from "@/features/auth/services/authApi.ts";

export default function LoginForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginRequest>();

    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (request: LoginRequest) => {
        try {
            await login(request);
            navigate(import.meta.env.VITE_HOME_URL);
        } catch (error: any) {
            if (error.response?.status === 401) {
                setError("root", {
                    type: "server",
                    message: "Incorrect email or password",
                });
                setError("email", {
                    type: "server",
                    message: "",
                });
                setError("password", {
                    type: "server",
                    message: "",
                });
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={6} align="flex-start" maxW="sm">

                {errors.root && (
                    <Text color="red.500" fontSize="sm" fontWeight={"bold"}>
                        Incorrect email or password
                    </Text>
                )}

                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Email:</Field.Label>
                    <Input {...register("email", {
                        required: "Email is required",
                        pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address"}
                    })} />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.password}>
                    <Field.Label>Password:</Field.Label>
                    <PasswordInput {...register("password", {
                        required: "Password is required",
                        minLength: {value: 8, message: "Password must be at least 8 characters"}
                    })} />
                    <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                </Field.Root>

                <HStack justify="space-between" w="full">
                    <RememberMeCheckbox
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                    />
                    <ForgotPasswordLink/>
                </HStack>

                <VStack align={"stretch"} w={"full"}>
                    <Button type={"submit"}>Sign In</Button>
                </VStack>
            </VStack>
        </form>
    );
}
