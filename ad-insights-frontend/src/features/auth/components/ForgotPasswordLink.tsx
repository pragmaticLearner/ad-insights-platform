import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ForgotPasswordLink() {
    return (
        <ChakraLink asChild>
            <RouterLink to={import.meta.env.VITE_FORGOT_PASSWORD_URL}>Forgot password?</RouterLink>
        </ChakraLink>
    );
}