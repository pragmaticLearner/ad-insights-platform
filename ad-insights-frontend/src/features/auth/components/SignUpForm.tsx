import {Button, Field, Input, VStack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import type {SignUpRequest} from "../types.ts";
import {useNavigate} from "react-router";
import {signup} from "@/features/auth/api/authApi.ts";
import {PasswordInput} from "@/features/auth/components/PasswordInput.tsx";

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<SignUpRequest>()

    const navigate = useNavigate();

    const onSubmit = async (request: SignUpRequest) => {
        console.log(request);
        if (request.password !== request.confirmPassword) {
            setError("password", {
                type: "unmatched fields",
                message: "Passwords must be the same",
            });
            setError("confirmPassword", {
                type: "unmatched fields",
                message: "Passwords must be the same",
            });
            return;
        }
        try {
            await signup(request);
            navigate(import.meta.env.VITE_HOME_URL);
        } catch (error: any) {
            if (error.response?.status === 409) {
                setError("email", {
                    type: "server",
                    message: "Email already in use.",
                });
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.firstName}>
                    <Field.Label>First Name:</Field.Label>
                    <Input {...register("firstName", {
                        required: "First name is required"
                    })} />
                    <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                    <Field.Label>Last Name:</Field.Label>
                    <Input {...register("lastName", {
                        required: "Last name is required"
                    })} />
                    <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
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
                    <PasswordInput {...register("confirmPassword", {
                        required: "Must confirm password"
                    })} />
                    <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
                </Field.Root>

                <VStack align={"stretch"} w={"full"}>
                    <Button type={"submit"}>Sign Up</Button>
                </VStack>
            </VStack>
        </form>
    );
}
