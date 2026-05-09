import {Link} from "@chakra-ui/react";

export default function ForgotPasswordLink() {
    return (
        <Link textStyle={"text"} href={import.meta.env.VITE_FORGOT_PASSWORD_URL}>Forgot password?</Link>
    );
}
