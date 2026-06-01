import {Flex, Box, HStack, VStack} from "@chakra-ui/react";
import { useState } from "react";
import HomePageSideNavBar from "./components/HomePageSideNavBar.tsx";
import LightDarkModeController from "../shared/components/LightDarkModeController.tsx";
import WorldMap from "@/features/map/components/WorldMap.tsx";

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

            <VStack
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
            </VStack>
        </Flex>
    );
}