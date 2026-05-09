import {Button, Field, HStack, Input, VStack} from "@chakra-ui/react";
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
        formState: { errors },
    } = useForm<LoginRequest>();

    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (request: LoginRequest) => {
        try {
            await login(request);
            navigate(import.meta.env.VITE_HOME_URL);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={6} align="flex-start" maxW="sm">

                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Email:</Field.Label>
                    <Input {...register("email", {
                        required: "Email is required",
                        pattern: {value: /\S+@\S+\.\S+/, message: "Invalid email address"}
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
