import React, { useContext } from "react";
import logoImage from "../../assets/images/logosaas.png";
import { MenuIcon } from "lucide-react";
import { AuthModalContext } from "../../contexts/AuthModalContext";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../loading";
import Banner from "../banner";
import MobileNav from "./mobile-side-nav";

const Navbar = (props) => {
  const { onOpen, isOpen, onClose } = useContext(AuthModalContext);

  const auth = useAuth();

  if (auth.loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const nav_links = [
    {
      title: "About",
      href: "",
    },
    {
      title: "Features",
      href: "",
    },
    {
      title: "Updates",
      href: "https://accredian.com/whyaccredian",
    },
  ];
  console.log(auth);
  return (
    <>
      <Banner />
      <div className="bg-black">
        <div className="px-4">
          <div className="py-4 flex items-center justify-between w-full ">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(247,153,191,.7),rgb(252,214,255,.7))] blur-md"></div>
              <img
                src={logoImage}
                alt="saas-logo"
                className="h-12 w-12 relative"
              />
            </div>
            <MobileNav
              nav_links={nav_links}
              onOpen={onOpen}
              onClose={onClose}
              open={open}
              auth={auth}
            />
            <nav className="hidden text-white sm:flex gap-6 items-center ">
              <a
                href=""
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                About
              </a>
              <a
                href=""
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Features
              </a>
              <a
                href=""
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Updates
              </a>
              <a
                href=""
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Help
              </a>
              {auth?.auth && <a
                href=""
                onClick={() => localStorage.removeItem("jwt")>auth.setAuth(null)}
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Logout
              </a>}
              <button
                className="bg-white text-black px-4 rounded-lg h-9"
                onClick={() => {
                  if (!auth.auth || auth.loading) {
                    onOpen();
                  }
                }}
              >
                {auth?.auth?.id ? "Welcome" : "Login"}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
