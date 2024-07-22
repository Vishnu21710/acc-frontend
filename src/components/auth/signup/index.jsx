import React, { useState } from "react";
import FormInput from "../../form-input";
import { useAuth } from "../../../contexts/AuthContext";
import { toast } from "sonner";
import { API_URL } from "../../../constants";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

const Signup = ({handleClick, onClose}) => {

  const {setAuth} = useAuth()

  const [pending, setPending] = useState(false)

  const [formState, setFormState] = useState({
    email: "",
    name: "",
    password: ""
  })

  const onChagne = (e)=>{
    setFormState(pre=>({...pre, [e.target.name]: e.target.value}))
  }

  const signup = async () => {
    setPending(true);
    try {
      const response = await axios.post(`${API_URL}/auth/signup`, formState);

      console.log(response.data, "SIGNUP DATA");

      const jwt_payload = response.data;

      if (!jwt_payload) {
        toast.error(response.data.msg);
        return;
      }

      console.log(jwt_payload, "payload");

      setAuth(jwt_payload);

      if (jwt_payload?.token) {
        localStorage.setItem("jwt", jwt_payload?.token);
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Network Error");
    } finally {
      setPending(false);
    }
  };

  console.log(handleClick);
  return (
    <div action="" className="flex flex-col  gap-y-5 max-w-xl p-7 rounded-md bg-white ">
      <h1 className="font-bold text-4xl">Sign Up</h1>
      <FormInput onChange={onChagne} required={true} name={"email"} label={"Email"} placeholder={"Enter your email"} type={"email"}/>
      <FormInput onChange={onChagne} name={"name"} label={"Name"} placeholder={"Enter your name"} type={"text"}/>
      <FormInput onChange={onChagne} required={true} name={"password"} placeholder={"Enter password"} label={"Password"} type={"password"} />
      <p>Already have an account? - <span onClick={handleClick} className="text-purple-600 cursor-pointer">Sign In</span></p>
      <button onClick={signup} className="bg-black text-white hover:bg-black/90 transition p-2 rounded-md">
      {pending ? <LoaderCircle className="w-4 h-4 animate-spin" /> : "Submit"}
      </button>
    </div>
  );
};

export default Signup;
