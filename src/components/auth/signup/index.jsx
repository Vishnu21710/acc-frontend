import React, { useState } from "react";
import FormInput from "../../form-input";

const Signup = ({handleClick}) => {

  const [formState, setFormState] = useState({
    email: "",
    name: "",
    password: ""
  })

  console.log(handleClick);
  return (
    <div action="" className="flex flex-col  gap-y-5 max-w-xl p-7 rounded-md bg-white ">
      <h1 className="font-bold text-4xl">Sign Up</h1>
      <FormInput required={true} name={"email"} label={"Email"} placeholder={"Enter your email"} type={"email"}/>
      <FormInput name={"name"} label={"Name"} placeholder={"Enter your name"} type={"text"}/>
      <FormInput required={true} name={"password"} placeholder={"Enter password"} label={"Password"} type={"password"} />
      <p>Already have an account? - <span onClick={handleClick} className="text-purple-600 cursor-pointer">Sign In</span></p>
      <button className="bg-black text-white hover:bg-black/90 transition p-2 rounded-md">
        Submit
      </button>
    </div>
  );
};

export default Signup;
