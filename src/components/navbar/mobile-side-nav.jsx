import clsx from "clsx";
import { LogOut, MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ nav_links, onOpen, onClose, open, auth, isAuthLoading }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(auth, "AUTH");

  return (
    <div className="relative sm:hidden block">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
        <div className="border border-white sm:hidden border-opacity-25 p-1 rounded-md inline-block">
          <MenuIcon className="text-white " />
        </div>
      </button>

      <div
        className={clsx(
          `fixed inset-0  bg-gray-800 bg-opacity-75 z-50 transition-transform transform`,
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-800"
          >
            <XIcon />
          </button>
          <nav
            className="mt-16 flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            {nav_links.map((link, index) => (
              <Link
                className="p-2 hover:bg-gray-100 border-b-1"
                key={index}
                to={link.href}
                
              >
                {link.title}
              </Link>
            ))}
            <Link className="p-2 hover:bg-gray-100 border-b-1" onClick={()=>{
                setIsOpen(false)
                if(!auth?.auth && !auth.loading){
                    onOpen()
                }
            }}>
                {auth?.auth?.id ? "Welcome" : "Login"}
            </Link>
            {auth?.auth && <Link onClick={()=>localStorage.removeItem("jwt") > auth.setAuth(null) > setIsOpen(false)} className="p-2 hover:bg-gray-100 border-b-1">
                Logout
            </Link>}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
