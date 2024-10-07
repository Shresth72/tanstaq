import {
  createRootRoute,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Head, Html, Meta, Body, Scripts } from "@tanstack/start";
import * as React from "react";
import { ThemeProvider } from "../_context/themeContext";
import "../_styles/index.css";
import { LayoutComponent } from "./_layout";

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "Portfolio",
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <LayoutComponent>{children}</LayoutComponent>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
