import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: ProtectedLayout,
});

function ProtectedLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <p>Die Seite lädt noch...</p>;
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
}
