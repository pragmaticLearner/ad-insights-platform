import NavBar from "@/components/NavBar.tsx";
import {Box, Image} from "@chakra-ui/react";
import Logo from "@/assets/giraffe_logo.jpg";

export default function LandingPage() {
    return (
        <>
            <NavBar />
            <Box
                position="relative"
                bgSize={"sm"}
            >
                <Image src={Logo} alt="giraffes" />
            </Box>
        </>
    );
}
