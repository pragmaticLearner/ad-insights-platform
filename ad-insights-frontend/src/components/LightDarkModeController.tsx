import { SegmentGroup } from "@chakra-ui/react";
import { RiComputerLine } from "react-icons/ri";
import { LuMoon, LuSun } from "react-icons/lu"
import { useTheme } from "next-themes";


export default function LightDarkModeController() {
    const { theme, setTheme } = useTheme();

    return (
        <SegmentGroup.Root
            value={theme}
            onValueChange={(e) => e.value && setTheme(e.value)}
        >
            <SegmentGroup.Indicator />
            <SegmentGroup.Items
                justifyContent="center"
                display="flex"
                items={[
                    { value: "system", label: <RiComputerLine /> },
                    { value: "light", label: <LuSun /> },
                    { value: "dark", label: <LuMoon /> },
                ]}
            />
        </SegmentGroup.Root>
    );
}
