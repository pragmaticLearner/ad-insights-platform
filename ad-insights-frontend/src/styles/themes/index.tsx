import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    strictTokens: false,
    theme: {
        tokens: {
            colors: {
                brand: {
                    // Surfaces
                    sidebar: { value: "#ffffff" },
                    primary: { value: "#f1f6f8" },

                    // Accent
                    accent: { value: "#F59E0B" },
                    accentHover: { value: "#D97706" },

                    // Text
                    textPrimary: { value: "#0F172A" },
                    textSecondary: { value: "#64748B" },
                    textMuted: { value: "#94A3B8" },

                    // Borders
                    borderSubtle: { value: "#E2E8F0" },
                    borderStrong: { value: "#CBD5E1" },
                },
            },
        },
        semanticTokens: {
            colors: {
                // Surfaces
                "surface.sidebar": {
                    value: { _light: "{colors.brand.sidebar}", _dark: "#1E293B" }
                },
                "surface.primary": {
                    value: { _light: "{colors.brand.primary}", _dark: "#0F172A" }
                },

                // Accent
                "accent.default": {
                    value: { _light: "{colors.brand.accent}", _dark: "{colors.brand.accent}" }
                },
                "accent.hover": {
                    value: { _light: "{colors.brand.accentHover}", _dark: "{colors.brand.accentHover}" }
                },

                // Text
                "text.primary": {
                    value: { _light: "{colors.brand.textPrimary}", _dark: "#F8FAFC" }
                },
                "text.secondary": {
                    value: { _light: "{colors.brand.textSecondary}", _dark: "#94A3B8" }
                },
                "text.muted": {
                    value: { _light: "{colors.brand.textMuted}", _dark: "#64748B" }
                },

                // Borders
                "border.subtle": {
                    value: { _light: "{colors.brand.borderSubtle}", _dark: "#334155" }
                },
                "border.strong": {
                    value: { _light: "{colors.brand.borderStrong}", _dark: "#475569" }
                },
            },
        },
        textStyles: {
            title: {
                value: {
                    fontSize: "xl",
                    fontWeight: "semibold",
                },
            },
            subtitle: {
                value: {
                    fontSize: "sm",
                    color: "text.secondary",
                },
            },
            text: {
                value: {
                    fontSize: "sm",
                    color: "text.primary",
                },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);