import { Input, InputGroup, IconButton } from "@chakra-ui/react";
import { useState, forwardRef } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const PasswordInput = forwardRef<HTMLInputElement, any>((props, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <InputGroup
            endElement={
                <IconButton
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </IconButton>
            }
        >
            <Input ref={ref} type={showPassword ? "text" : "password"} {...props} />
        </InputGroup>
    );
});

PasswordInput.displayName = "PasswordInput";