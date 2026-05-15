import {HStack, Image} from "@chakra-ui/react";
import logo from "@/assets/giraffe_logo.jpg";
import ColourModeSwitch from "@/features/ui/components/navbar/ColourModeSwitch.tsx";
import {useNavigate} from "react-router-dom";

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
            <ColourModeSwitch />
        </HStack>
    );
}
