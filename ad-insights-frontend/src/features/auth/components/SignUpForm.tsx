import {Field, Input, VStack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import SignInButtons from "@/features/auth/components/SignInButtons.tsx";

interface SignUpFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>()

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <form onSubmit={onSubmit}>
            <VStack gap="4" align="flex-start" maxW="sm">
                <Field.Root invalid={!!errors.firstName}>
                    <Field.Label>First Name:</Field.Label>
                    <Input {...register("firstName")} />
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                    <Field.Label>Last Name:</Field.Label>
                    <Input {...register("lastName")} />
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                    <Field.Label>Email:</Field.Label>
                    <Input {...register("email")} />
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                    <Field.Label>Password:</Field.Label>
                    <Input {...register("password")} />
                </Field.Root>

                <Field.Root invalid={!!errors.lastName}>
                    <Field.Label>Confirm Password:</Field.Label>
                    <Input {...register("confirmPassword")} />
                </Field.Root>

                <SignInButtons/>
            </VStack>
        </form>
    );
}
