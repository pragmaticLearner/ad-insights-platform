import {Button, VStack} from "@chakra-ui/react";
import {FaGoogle} from "react-icons/fa";


export default function SignInButtons() {
    return (
        <VStack align={"stretch"} w={"full"}>
            <Button type={"submit"}>Sign in</Button>
            <Button type={"button"}><FaGoogle />Sign in with google</Button>
        </VStack>
    );
}
