import LandingPageNavBar from "../../../components/LandingPageNavBar.tsx";
import {Box} from "@chakra-ui/react";

export default function LandingPage() {
    return (
        <>
            <LandingPageNavBar />
            <Box
                position="relative"
                bgSize={"sm"}
                bg={"brand.primary"}
            >
            </Box>
        </>
    );
}
