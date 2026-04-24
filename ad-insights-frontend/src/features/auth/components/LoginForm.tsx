import {Field, HStack, Input, VStack} from "@chakra-ui/react";
import { PasswordInput } from "@/features/auth/components/PasswordInput.tsx";
import { useForm } from "react-hook-form"
import RememberMeCheckbox from "@/features/auth/components/RememberMeCheckbox.tsx";
import ForgotPasswordLink from "@/features/auth/components/ForgotPasswordLink.tsx";
import SignInButtons from "@/features/auth/components/SignInButtons.tsx";
import {useState} from "react";


interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
}

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const [rememberMe, setRememberMe] = useState(false);
    const onSubmit = handleSubmit((data) => {
        console.log({
            ...data,
            rememberMe,
        });
    });

    return (
        <form onSubmit={onSubmit}>
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
