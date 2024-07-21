import React, { useContext } from "react";
import logoImage from "../../assets/images/logosaas.png";
import { MenuIcon } from "lucide-react";
import { AuthModalContext } from "../../contexts/AuthModalContext";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = (props) => {
  const { onOpen, isOpen, onClose } = useContext(AuthModalContext);

  const auth = useAuth();
  
  if (auth.loading) {
    return "...Loading";
  }

  console.log(auth);
  return (
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
          <div className="border border-white sm:hidden border-opacity-25 p-1 rounded-md inline-block">
            <MenuIcon className="text-white " />
          </div>
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
            <a
              href=""
              onClick={() => localStorage.removeItem("jwt")}
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Logout
            </a>
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
  );
};

export default Navbar;
