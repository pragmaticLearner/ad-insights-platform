import { Flex, HStack, Icon } from "@chakra-ui/react";
import { IoMdSearch, IoMdPerson } from "react-icons/io";
import { PiSidebarSimpleThin } from "react-icons/pi";
import { IoIosBookmark } from "react-icons/io";
import { IoEarth } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoSettingsOutline, IoLogInOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import LogoText from "../../shared/components/LogoText.tsx";
import SideBarNavItem from "./SideBarNavItem.tsx";
import SearchDialog from "./SearchDialog.tsx";
import {useState} from "react";
import SiteLogo from "@/shared/components/SiteLogo.tsx";

const mainNavItems = [
    { icon: IoEarth, label: "Map" },
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
    const [searchOpen, setSearchOpen] = useState(false);
    const navProps = { isCollapsed };

    return (
        <Flex
            direction="column"
            h="100%"
            p={2}
            bg={"surface.secondary"}
            transition="width 0.25s ease"
            overflow="hidden"
        >

            <HStack justifyContent={isCollapsed ? "center" : "space-between"} align="center" gap={2}>
                {!isCollapsed && (
                    <HStack gap={2} align={"center"}>
                        <SiteLogo boxSize={"40px"} borderRadius={"full"} fit={"cover"} />
                        <LogoText />
                    </HStack>
                )}
                <Icon
                    onClick={onToggle}
                    as={PiSidebarSimpleThin}
                    boxSize={7}
                    cursor="pointer"
                    borderRadius="md"
                    p={1}
                    transition="background 0.15s ease"
                    color={"text.primary"}
                />
            </HStack>

            <Flex direction="column" flex={1} mt={4} color={"text.primary"}>
                {mainNavItems.map((item) => (
                    <SideBarNavItem
                        key={item.label}
                        {...item}
                        {...navProps}
                        onClick={item.label === "Search" ? () => setSearchOpen(true) : undefined}
                    />
                ))}
            </Flex>

            <Flex direction="column" mt="auto" color={"text.primary"}>
                {bottomNavItems.map((item) => (
                    <SideBarNavItem key={item.label} {...item} {...navProps} />
                ))}
            </Flex>

            <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

        </Flex>
    );
}