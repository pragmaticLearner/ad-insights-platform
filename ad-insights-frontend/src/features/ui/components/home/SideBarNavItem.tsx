import {Flex, Icon} from "@chakra-ui/react";

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    isCollapsed: boolean;
}

export default function SideBarNavItem({ icon, label, isCollapsed }: NavItemProps) {
    return (
        <Flex
            align="center"
            justify={isCollapsed ? "center" : "flex-start"}
            gap={3}
            p={2}
        >
            <Icon as={icon} boxSize={5} />
            {!isCollapsed && <span>{label}</span>}
        </Flex>
    );
}