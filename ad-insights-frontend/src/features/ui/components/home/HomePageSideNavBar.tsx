import { Button, Flex, HStack, Icon } from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";
import { PiSidebarSimpleThin } from "react-icons/pi";
import LogoText from "@/components/LogoText.tsx";
import { IoIosBookmark } from "react-icons/io";
import SideBarNavItem from "./SideBarNavItem";

interface Props {
    isCollapsed: boolean;
    onToggle: () => void;
}

export default function HomePageSideNavBar({ isCollapsed, onToggle }: Props) {
    return (
        <Flex direction="column" h="100%">

            <HStack
                justifyContent={isCollapsed ? "center" : "space-between"}
                align="center"
                p={2}
            >
                {!isCollapsed && <LogoText />}
                <Icon
                    onClick={onToggle}
                    as={PiSidebarSimpleThin}
                    boxSize={6}
                    cursor="pointer"
                    borderRadius="md"
                    p={1}
                    _hover={{ bg: "gray.100" }}
                    transition="background 0.15s ease"
                />
            </HStack>

            <SideBarNavItem icon={IoMdSearch} label="Search" isCollapsed={isCollapsed} />
            <SideBarNavItem icon={IoIosBookmark} label="Favourites" isCollapsed={isCollapsed} />

        </Flex>
    );
}