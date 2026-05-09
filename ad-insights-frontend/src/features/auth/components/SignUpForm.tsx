import {Button, Field, Input, VStack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import type {SignUpRequest} from "./utils/LoginRequest.tsx";
import {useNavigate} from "react-router";
import {signup} from "@/features/auth/services/authApi.ts";
import {PasswordInput} from "@/features/auth/components/PasswordInput.tsx";

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpRequest>()

    const navigate = useNavigate();

    const onSubmit = async (data: SignUpRequest) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords must match");
            return;
        }
        try {
            await signup(data);
            navigate(import.meta.env.VITE_HOME_URL);
        } catch (error) {
            console.log("Error creating user", error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.firstName}>
                    <Field.Label>First Name:</Field.Label>
                    <Input {...register("firstName")} />
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                    <Field.Label>Last Name:</Field.Label>
                    <Input {...register("lastName")} />
                </Field.Root>

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

                <Field.Root invalid={!!errors.confirmPassword}>
                    <Field.Label>Confirm Password:</Field.Label>
                    <PasswordInput {...register("confirmPassword")} />
                </Field.Root>

                <VStack align={"stretch"} w={"full"}>
                    <Button type={"submit"}>Sign Up</Button>
                </VStack>
            </VStack>
        </form>
    );
}
