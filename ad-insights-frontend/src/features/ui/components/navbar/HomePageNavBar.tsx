import {HStack, Image} from "@chakra-ui/react";
import logo from "@/assets/giraffe_logo.jpg";
import ColourModeSwitch from "@/features/ui/components/navbar/ColourModeSwitch.tsx";

export default function HomePageNavBar() {
    return (
        <HStack justifyContent={"space-between"} padding={"10px"}>
            <Image src={logo} boxSize={"60px"}/>
            <ColourModeSwitch />
        </HStack>
    );
}
