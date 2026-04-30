import {Box, Image} from "@chakra-ui/react";
import Logo from "@/assets/giraffe_logo.jpg";

export default function Site() {
    return (
        <Box>
            <Image src={Logo} alt="Logo" height="200px" mx="auto" />
        </Box>
    );
}
