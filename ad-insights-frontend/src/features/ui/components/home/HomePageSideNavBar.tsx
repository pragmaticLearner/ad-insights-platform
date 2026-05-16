import { Flex, HStack, Icon } from "@chakra-ui/react";
import { IoMdSearch, IoMdPerson } from "react-icons/io";
import { PiSidebarSimpleThin } from "react-icons/pi";
import { IoIosBookmark } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoSettingsOutline, IoLogInOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import LogoText from "@/components/LogoText.tsx";
import SideBarNavItem from "./SideBarNavItem";

const mainNavItems = [
    { icon: IoMdSearch, label: "Search" },
    { icon: IoIosBookmark, label: "Favourites" },
    { icon: MdDashboard, label: "Dashboard" },
];

const bottomNavItems = [
    {
        icon: IoSettingsOutline,
        label: "Settings",
        menuItems: [
            { label: "Log out", icon: IoLogInOutline },
        ],
    },
    { icon: IoMdPerson, label: "Profile" },
    { icon: IoInformationCircleOutline, label: "Help Center" },
];

interface Props {
    isCollapsed: boolean;
    onToggle: () => void;
}

export default function HomePageSideNavBar({ isCollapsed, onToggle }: Props) {
    const navProps = { isCollapsed };

    return (
        <Flex direction="column" h="100%" p={2}>

            <HStack justifyContent={isCollapsed ? "center" : "space-between"} align="center">
                {!isCollapsed && <LogoText />}
                <Icon
                    onClick={onToggle}
                    as={PiSidebarSimpleThin}
                    boxSize={7}
                    cursor="pointer"
                    borderRadius="md"
                    p={1}
                    _hover={{ bg: "gray.100" }}
                    transition="background 0.15s ease"
                />
            </HStack>

            <Flex direction="column" flex={1} mt={4}>
                {mainNavItems.map((item) => (
                    <SideBarNavItem key={item.label} {...item} {...navProps} />
                ))}
            </Flex>

            <Flex direction="column" mt="auto">
                {bottomNavItems.map((item) => (
                    <SideBarNavItem key={item.label} {...item} {...navProps} />
                ))}
            </Flex>

        </Flex>
    );
}