import clsx from "clsx";
import React from "react";

const variants = {
  default: "bg-black/80 hover:bg-black/70 text-white",
  primary: "bg-blue-500 text-white hover:bg-blue-500/90 ",
  desctructive: "bg-rose-600 hover:bg-rose-600/80 text-white",
  secondary: "bg-gray-500 hover:bg-gray-500/90 text-white",
  ghost: "bg-transparent text-gray-800 hover:bg-gray-500/[.18]",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
  xs: "h-7 w-7",
  inline: "h-auto px-2 py-1.5 text-sm",
};

const Button = ({children, variant="default", size="default", className, onClick, onBlur, disabled}) => {
  return (
    <button onBlur={onBlur} disabled={disabled} onClick={onClick} className={clsx("rounded transition p-2 text-sm", variants[!variant ? "default" : variant], sizes[!size ? "default": size], className)}>
      {children}
    </button>
  );
};

export default Button;
