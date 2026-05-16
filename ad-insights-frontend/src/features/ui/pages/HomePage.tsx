import { Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import HomePageSideNavBar from "../components/home/HomePageSideNavBar.tsx";

type SidebarMode = "full" | "collapsed";

export default function HomePage() {
    const [sidebarMode, setSidebarMode] = useState<SidebarMode>("full");

    const isCollapsed = sidebarMode === "collapsed";

    return (
        <Flex minH="100vh" w="100%">
            <Box
                w={isCollapsed ? "4rem" : "18rem"}
                flexShrink={0}
                bg="brand.sidebar"
                borderRight="1px solid"
                borderColor="gray.200"
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
                bg="brand.primary"
                padding={5}
            >
                Main
            </Box>
        </Flex>
    );
}