import { Dialog, Input, Box } from "@chakra-ui/react";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function SearchDialog({ open, onClose }: Props) {
    return (
        <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content maxW="600px" mt="20vh">
                    <Box p={3} borderBottom="1px solid" >
                        <Input
                            placeholder="Search..."
                            border="none"
                            outline="none"
                            fontSize="md"
                            autoFocus
                        />
                    </Box>
                    <Box p={4} fontSize="sm">
                        No recent searches
                    </Box>
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
}