import {Field, Input, VStack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import SignInButtons from "@/features/auth/components/SignInButtons.tsx";
import type {SignUpFormData} from "./utils/LoginFormData.tsx";
import {useNavigate} from "react-router";

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>()

    const navigate = useNavigate();

    const onSubmit = async (data: SignUpFormData) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords must match");
            return;
        }
        console.log(data);
        try {
            const response = await fetch("http://localhost:8080/ga/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const res = await response.json();
            console.log("User created successfully: ", res);
            navigate("/home");
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
