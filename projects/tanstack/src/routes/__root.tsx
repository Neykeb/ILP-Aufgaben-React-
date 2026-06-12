import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navi } from "../components/templates/navi";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navi />
      <Outlet />
    </React.Fragment>
  );
}
