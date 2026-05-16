import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    strictTokens: false,
    theme: {
        tokens: {
            colors: {
                brand: {
                    border: {value: "#817c7c"}, //
                    sidebar: { value: "#ffffff" }, // side nav bar
                    primary: { value: "#f1f6f8" }, // main area in /home
                },
            },
        },
        semanticTokens: {
            colors: {
                border: {
                    subtle: {
                        value: {
                            _light: "{colors.gray.200}",
                            _dark: "{colors.gray.700}",
                        }
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