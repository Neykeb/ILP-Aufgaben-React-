import { Link } from "@tanstack/react-router";
export function Footer(){
    return (
      <>
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
          <nav>
            <h6 className="footer-title">Navigation</h6>

            <Link className="link link-hover" to="/">
              Startseite
            </Link>

            <Link className="link link-hover" to="/about-me">
              Über uns
            </Link>

            <Link
              className="link link-hover"
              to="/jobs"
              search={{ level: undefined }}
            >
              Jobs
            </Link>

            <Link className="link link-hover" to="/impressum">
              Impressum
            </Link>
          </nav>

          
        </footer>
      </>
    );
}