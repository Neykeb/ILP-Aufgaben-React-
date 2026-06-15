import { Link } from "@tanstack/react-router";

export function Navi(){
    return (
      <>
        <div className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md">
          <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
          <label
            htmlFor="navbar-1-toggle"
            className="fixed inset-0 hidden max-lg:peer-checked:block"
          ></label>
          <div className="collapse-title navbar">
            <div className="navbar-start">
              <label
                htmlFor="navbar-1-toggle"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <div className="btn btn-ghost text-primary text-xl">
                <Link to="/">JobMeister</Link>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className="flex flex-row ">
                  <button>
                    <Link to="/jobs" search={{ level: undefined }}>
                      Jobs
                    </Link>
                  </button>
                  <button>
                    <Link to="/impressum">Impressum</Link>
                  </button>
                  <button>
                    <Link to="/about-me">Über uns</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="collapse-content lg:hidden z-1">
            <ul className="menu">
              <li>
                <button>
                  <Link to="/jobs" search={{ level: undefined }}>
                    Jobs
                  </Link>
                </button>
                <button>
                  <Link to="/about-me">Über uns</Link>
                </button>
                <button>
                  <Link to="/impressum">Impressum</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}