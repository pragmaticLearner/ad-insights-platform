import {Flex, HStack, Image} from "@chakra-ui/react";
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from "@/assets/giraffe_logo.jpg";

const links = [
    {name: "Home", to: "/"},
    {name: "About", to: "/about"},
    {name: "Pricing", to: "/pricing"},
    {name: "Login", to: "/login"},
]

export default function NavBar() {
    return (
        <Flex as="nav" align="center" justify="space-between" p={4}>
            <HStack fontWeight="bold">
                <Image
                    src={Logo}
                    boxSize={"80px"}
                    borderRadius={"full"}
                    fit={"cover"}
                />
                Giraffe Analytics
            </HStack>

            <HStack>
                {links.map(link => (
                    <ChakraLink key={link.to} asChild>
                        <RouterLink to={link.to}>
                            {link.name}
                        </RouterLink>
                    </ChakraLink>
                ))}
            </HStack>
        </Flex>
    );
}
