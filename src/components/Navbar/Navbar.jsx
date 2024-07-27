import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="text-white py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link
                className="block text-white text-3xl hover:text-white"
                to={"/"}
              >
                <span className="">Start Framework </span>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav
                aria-label="Global"
                className={`hidden md:block ${
                  isMobileMenuOpen ? "block" : "hidden"
                } md:block`}
              >
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <NavLink
                      className="text-white transition text-uppercase font-semibold mt-3 p-2 rounded-md text-lg hover:text-white"
                      to={"/about"}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-white transition text-uppercase font-semibold mt-3 p-2 rounded-md text-lg hover:text-white"
                      to={"/portfolio"}
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="text-white transition text-uppercase font-semibold mt-3 p-2 rounded-md text-lg hover:text-white"
                      to={"/contact"}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition"
                    onClick={toggleMobileMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white transition"
                    to={"/about"}
                    onClick={toggleMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition"
                    to={"/portfolio"}
                    onClick={toggleMobileMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition"
                    to={"/contact"}
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
