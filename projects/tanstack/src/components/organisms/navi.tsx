import { Link } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function Navi() {
  return (
    <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>

      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            ☰
          </label>

          <Link to="/" className="btn btn-ghost text-primary text-xl">
            JobMeister
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/jobs" search={{ level: undefined }}>
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
            <li>
              <Link to="/about-me">Über uns</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <SignedOut>
          {/* zeigt den Inhalt nur, wenn der User NICHT eingeloggt ist. */}
            <SignInButton mode="modal">
              <button className="btn btn-primary">Login</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
             {/* zeigt den Inhalt nur, wenn der User eingeloggt ist. */}
            <UserButton />
             {/* Der UserButton ist dieser kleine Account-Kreis von Clerk. Darüber
            kann man Profil, Logout usw. öffnen. */}
          </SignedIn>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <Link to="/jobs" search={{ level: undefined }}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/about-me">Über uns</Link>
          </li>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
