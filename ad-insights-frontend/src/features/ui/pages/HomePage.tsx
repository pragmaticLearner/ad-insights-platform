import {Flex, Box, HStack} from "@chakra-ui/react";
import { useState } from "react";
import HomePageSideNavBar from "../components/home/HomePageSideNavBar.tsx";
import LightDarkModeController from "../../../shared/components/LightDarkModeController.tsx";
import WorldMap from "@/features/map/WorldMap.tsx";

type SidebarMode = "full" | "collapsed";

export default function HomePage() {
    const [sidebarMode, setSidebarMode] = useState<SidebarMode>("full");

    const isCollapsed = sidebarMode === "collapsed";

    return (
        <Flex minH="100vh" w="100%">
            <Box
                w={isCollapsed ? "4rem" : "18rem"}
                flexShrink={0}
                borderRight="1px solid"
                borderColor={"border.strong"}
                transition="width 0.2s ease"
                overflow="hidden"
            >
                <HomePageSideNavBar
                    isCollapsed={isCollapsed}
                    onToggle={() => setSidebarMode(isCollapsed ? "full" : "collapsed")}
                />
            </Box>

            <Box
                flex={1}
                padding={5}
                bg={"surface.sidebar"}
            >
                <HStack
                    justify="right"
                    w="full"
                >
                    <LightDarkModeController/>
                </HStack>
                <WorldMap/>
            </Box>
        </Flex>
    );
}