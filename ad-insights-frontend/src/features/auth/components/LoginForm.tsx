import {Field, HStack, Input, VStack} from "@chakra-ui/react";
import { PasswordInput } from "@/features/auth/components/PasswordInput.tsx";
import { useForm } from "react-hook-form"
import RememberMeCheckbox from "@/features/auth/components/RememberMeCheckbox.tsx";
import ForgotPasswordLink from "@/features/auth/components/ForgotPasswordLink.tsx";
import SignInButtons from "@/features/auth/components/SignInButtons.tsx";
import {type JSX, useState} from "react";
import type {LoginFormData} from "./utils/LoginFormData.tsx";
import {useNavigate} from "react-router";

export default function LoginForm(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

    const onSubmit = async (data: LoginFormData) => {
        console.log(data);
        let isAuthenticated = false;
        try {
            const response = await fetch("http://localhost:8080/ga/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const res = await response.json();
            console.log(res);
            if (res.status === 200) {
                isAuthenticated = true;
            }

            if (isAuthenticated) {
                navigate("/home")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap={6} align="flex-start" maxW="sm">

                <Field.Root invalid={!!errors.email}>
                    <Field.Label>Email</Field.Label>
                    <Input {...register("email")} />
                </Field.Root>

                <Field.Root invalid={!!errors.password}>
                    <Field.Label>Password</Field.Label>
                    <PasswordInput {...register("password")} />
                </Field.Root>

                <HStack justify="space-between" w="full">
                    <RememberMeCheckbox
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                    />
                    <ForgotPasswordLink/>
                </HStack>

                <SignInButtons/>
            </VStack>
        </form>
    );
}
