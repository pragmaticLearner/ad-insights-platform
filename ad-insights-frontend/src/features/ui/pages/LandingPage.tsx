import LandingPageNavBar from "../components/landing/LandingPageNavBar.tsx";
import {Box} from "@chakra-ui/react";

export default function LandingPage() {
    return (
        <>
            <LandingPageNavBar />
            <Box
                position="relative"
                bgSize={"sm"}
            >
            </Box>
        </>
    );
}
