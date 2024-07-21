import React, { useState } from "react";
import FormInput from "../../form-input";
import axios from "axios"
import {API_URL} from "../../../constants/index"
import { useAuth } from "../../../contexts/AuthContext";

const Signin = ({handleClick, onClose}) => {

  const {setAuth} = useAuth()

  const [formInput, setFormInput] = useState({
    email: "",
    password: ""
  })

  console.log(formInput);

  const onChange = (e)=>{
    const {name, value} = e.target
    setFormInput((pre)=>({...pre, [name]: value}))
  }

  const login = async()=>{
    console.log("inside login");
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, formInput)
      const jwt_payload = response.data.user
      
      console.log(jwt_payload, "payload");

      setAuth(jwt_payload)

      if(jwt_payload.token){
        localStorage.setItem('jwt', jwt_payload.token)
      }

    } catch (error) {
      console.log(error);
      alert(error)
    }finally{
      onClose()
    }
  }

  return (
    <div className="flex flex-col gap-y-5 max-w-xl bg-white p-7 rounded-md">
      <FormInput onChange={onChange} name={"email"}  label={"Email"} required={true} placeholder={"Enter your email"} type={"email"}/>
      <FormInput onChange={onChange} name={"password"} label={"Password"} required={true} placeholder={"Enter Password"} type={"password"}/>
      <p>Don't have an accoun?t - <span onClick={handleClick} className="text-purple-600 cursor-pointer">Sign Up</span></p>
      <button onClick={login} className="bg-black text-white hover:bg-black/90 transition p-2 rounded-md">
        Submit
      </button>
    </div>
  );
};

export default Signin;
