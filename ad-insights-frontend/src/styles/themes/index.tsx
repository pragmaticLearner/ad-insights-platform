import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        textStyles: {
            title: {
                value: {
                    fontSize: "xl",
                    fontWeight: "semibold",
                    textAlign: "center",
                    align: "stretch"
                },
            },
            subtitle: {
                value: {
                    fontSize: "sm",
                    color: "gray.500",
                    textAlign: "center"
                },
            },
            text: {
                value: {
                    fontSize: "sm",
                }
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
