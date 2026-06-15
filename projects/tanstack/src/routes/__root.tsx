import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Navi } from "../components/organisms/navi";
import { Footer } from "../components/organisms/footer";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navi />
      
      {/* Outlet ist der Platz, an dem die aktuelle Seite eingesetzt wird.
          Wenn der Nutzer /jobs öffnet, erscheint hier die Jobs-Seite.
          Wenn der Nutzer /about-me öffnet, erscheint hier die About-Seite. */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

// hallo