import {Text} from "@chakra-ui/react";
import {useNavigate} from "react-router";

export default function LogoText() {
    const navigate = useNavigate();
    return (
        <Text
            color={"text.primary"}
            fontSize="md"
            fontWeight={600}
            onClick={() => navigate(import.meta.env.VITE_HOME_URL)}
            cursor="pointer"
        >
            Geo Analytica
        </Text>
    );
}
