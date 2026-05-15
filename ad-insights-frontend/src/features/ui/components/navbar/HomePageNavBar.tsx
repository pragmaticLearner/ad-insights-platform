import {HStack, Image} from "@chakra-ui/react";
import logo from "@/assets/giraffe_logo.jpg";
import {useNavigate} from "react-router-dom";
import {ColorModeButton} from "@/components/ui/color-mode.tsx";

export default function HomePageNavBar() {
    const navigate = useNavigate();

    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image
                src={logo}
                boxSize={"60px"}
                onClick={() => navigate(import.meta.env.VITE_HOME_URL)}
                cursor={"pointer"}
            />
            <ColorModeButton />
        </HStack>
    );
}
