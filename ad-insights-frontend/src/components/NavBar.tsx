import {Box, Flex, HStack} from "@chakra-ui/react";
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const links = [
    {name: "Home", to: "/"},
    {name: "About", to: "/about"},
    {name: "Login", to: "/login"},
]

export default function NavBar() {
    return (
        <Flex as="nav" align="center" justify="space-between" p={4}>
            <Box fontWeight="bold">Giraffe Analytics</Box>

            <HStack gap={6}>
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
