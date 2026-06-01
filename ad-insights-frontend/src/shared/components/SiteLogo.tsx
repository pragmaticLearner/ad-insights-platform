import {Image} from "@chakra-ui/react";
import { useColorMode } from "@/shared/components/color-mode.tsx";
import LightModeLogo from "@/shared/assets/images/geo-analytica-light-mode.png";
import DarkModeLogo from "@/shared/assets/images/geo-analytica-dark-mode.png";

interface Props {
    boxSize?: string
    borderRadius?: string
    fit?: string
}

export default function SiteLogo(props: Props): JSX.Element {
    const {colorMode} = useColorMode();
    return (
        <Image
            src={colorMode === "light" ? LightModeLogo : DarkModeLogo}
            {...props}
        />
    );
}
