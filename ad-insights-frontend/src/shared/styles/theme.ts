import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    strictTokens: false,
    theme: {
        tokens: {
            colors: {
                brand: {
                    // Surfaces
                    primary: { value: "#f1f5f6" },
                    secondary: { value: "rgb(236 242 243)" },

                    // Text
                    textPrimary: { value: "#1E293B" },
                    textSecondary: { value: "#475569" },
                    textMuted: { value: "#94A3B8" },

                    // Borders
                    borderStrong: { value: "#aeb6c1" },
                },
            },
        },
        semanticTokens: {
            colors: {
                // Surfaces
                "surface.sidebar": {
                    value: { _light: "{colors.brand.secondary}", _dark: "#1E293B" }
                },
                "surface.primary": {
                    value: { _light: "{colors.brand.primary}", _dark: "#0F172A" }
                },

                // Text
                "text.primary": {
                    value: { _light: "{colors.brand.textPrimary}", _dark: "#E2E8F0" }
                },
                "text.secondary": {
                    value: { _light: "{colors.brand.textSecondary}", _dark: "#94A3B8" }
                },
                "text.muted": {
                    value: { _light: "{colors.brand.textMuted}", _dark: "#64748B" }
                },

                // Borders
                "border.strong": {
                    value: { _light: "{colors.brand.borderStrong}", _dark: "#475569" }
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
