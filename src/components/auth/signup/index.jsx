import React from "react";
import FormInput from "../../form-input";

const Signup = ({handleClick}) => {

  console.log(handleClick);
  return (
    <div action="" className="flex flex-col  gap-y-5 max-w-xl p-7 rounded-md bg-white ">
      <FormInput name={"email"} title={"Email"} placeHolder={"Enter your email"} type={"email"}/>
      <FormInput name={"name"} title={"Name"} placeHolder={"Enter your name"} type={"text"}/>
      <FormInput name={"password"} placeHolder={"Enter password"} title={"Password"} type={"password"} />
      <p>Already have an account? - <span onClick={handleClick} className="text-purple-600 cursor-pointer">Sign In</span></p>
      <button className="bg-black text-white hover:bg-black/90 transition p-2 rounded-md">
        Submit
      </button>
    </div>
  );
};

export default Signup;
