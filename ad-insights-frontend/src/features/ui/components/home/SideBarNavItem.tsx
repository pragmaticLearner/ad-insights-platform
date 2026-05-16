import {Flex, Icon, Menu, IconButton, Button} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface MenuItemType {
    label: string;
    onClick?: () => void;
    color?: string;
}

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    isCollapsed: boolean;
    menuItems?: MenuItemType[];
}

export default function SideBarNavItem({ icon, label, isCollapsed, menuItems }: NavItemProps) {
    return (
        <Flex
            align="center"
            justify={isCollapsed ? "center" : "flex-start"}
            gap={3}
            p={2}
            cursor="pointer"
            borderRadius="md"
            _hover={{ bg: "gray.100" }}
            css={{
                "&:hover .kebab-btn": { opacity: 100 }
            }}
        >
            <Icon as={icon} boxSize={5} />
            {!isCollapsed && (
                <>
                    <span style={{ flex: 1 }}>{label}</span>
                    {menuItems && (
                        <Menu.Root>
                            <Menu.Trigger asChild>
                                <IconButton
                                    className="kebab-btn"
                                    variant="ghost"
                                    size="xs"
                                    opacity={0}
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label="More options"
                                >
                                    <BsThreeDotsVertical />
                                </IconButton>
                            </Menu.Trigger>
                            <Menu.Positioner>
                                <Menu.Content
                                    bg="white"
                                    boxShadow="md"
                                    borderRadius="md"
                                    border="1px solid"
                                    borderColor="gray.200"
                                >
                                    {menuItems.map((item) => (
                                        <Menu.Item
                                            key={item.label}
                                            value={item.label}
                                            onClick={item.onClick}
                                            color={item.color}
                                        >
                                            <Button variant={"ghost"}>{item.label}</Button>
                                        </Menu.Item>
                                    ))}
                                </Menu.Content>
                            </Menu.Positioner>
                        </Menu.Root>
                    )}
                </>
            )}
        </Flex>
    );
}