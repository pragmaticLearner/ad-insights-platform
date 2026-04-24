import {Input, InputGroup, IconButton} from "@chakra-ui/react";
import {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";



export function PasswordInput(props: any) {
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
            <Input type={showPassword ? "text" : "password"} {...props} />
        </InputGroup>
    );
}
