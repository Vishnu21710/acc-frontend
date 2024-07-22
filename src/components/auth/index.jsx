import React, { useContext, useState } from "react";
import Signup from "./signup";
import Signin from "./signin";
import { AuthModalContext } from "../../contexts/AuthModalContext";

const Auth = () => {

  const { onOpen, isOpen, onClose} = useContext(AuthModalContext)

  const [showSignUp, setShowSignup] = useState(false);

  const handleClick = ()=>{
    setShowSignup(!showSignUp)
  }

  if(!isOpen){
    return
  }

  return (
    <div onClick={onClose} className="w-full fixed flex items-center p-5 justify-center bg-black bg-opacity-50 z-[20] min-h-full  backdrop-filter backdrop-blur-md">
      <div onClick={(e)=>e.stopPropagation()}>
      {showSignUp ? <Signup onClose={onClose} handleClick={handleClick}/> : <Signin onClose={onClose} handleClick={handleClick}/>}
      </div>
    </div>
  );
};

export default Auth;
