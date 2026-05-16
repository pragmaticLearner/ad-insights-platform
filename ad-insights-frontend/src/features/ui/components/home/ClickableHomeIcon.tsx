import {Image} from "@chakra-ui/react";
import logo from "@/assets/giraffe_logo.jpg";
import {useNavigate} from "react-router-dom";

export default function ClickableHomeIcon() {
    const navigate = useNavigate();

    return (
        <Image
            src={logo}
            boxSize={"60px"}
            onClick={() => navigate(import.meta.env.VITE_HOME_URL)}
            cursor={"pointer"}
        />
    );
}
