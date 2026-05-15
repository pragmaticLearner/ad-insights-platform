import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    strictTokens: false,
    theme: {
        semanticTokens: {
            colors: {
                bg: {
                    value: {
                        _light: "#FFFFFF",
                        _dark: "#0b0b44",
                    }
                },
                fg: {
                    value: {
                        _light: "#0F0F0F",
                        _dark: "#E2E8F0",
                    }
                }
            }
        },
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