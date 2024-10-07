import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ThemeProvider, useTheme } from "../_context/themeContext";

export const Route = createFileRoute("/_layout")({
  component: () => LayoutComponent,
});

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const { theme, colors, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: colors.background,
        color: colors.text,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
