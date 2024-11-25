import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: () => LayoutComponent,
});

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  // const { theme, colors, toggleTheme } = useTheme();

  return <div>{children}</div>;
}
