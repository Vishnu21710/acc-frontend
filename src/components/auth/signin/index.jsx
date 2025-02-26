import React, { useState } from "react";
import FormInput from "../../form-input";
import axios from "axios";
import { API_URL } from "../../../constants/index";
import { useAuth } from "../../../contexts/AuthContext";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const Signin = ({ handleClick, onClose }) => {
  const { setAuth } = useAuth();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState();

  const [formInput, setFormInput] = useState({
    email: "mark@gmail.com",
    password: "mark",
  });

  console.log(formInput);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormInput((pre) => ({ ...pre, [name]: value }));
  };

  const login = async () => {
    setPending(true);
    try {
      const response = await axios.post(`${API_URL}/auth/signin`, formInput);

      console.log(response.data);

      const jwt_payload = response.data?.user;

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
      toast.error("Network Error");
      setError(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col gap-y-5 max-w-xl bg-white p-7 rounded-md">
      <h1 className="font-bold text-4xl ">Sign In</h1>
      <p className="text-xs text-gray-600">
        Use the default credentials below to login
      </p>
      <FormInput
        value={formInput.email}
        onChange={onChange}
        name={"email"}
        label={"Email"}
        required={true}
        placeholder={"Enter your email"}
        type={"email"}
      />
      <FormInput
        value={formInput.password}
        onChange={onChange}
        name={"password"}
        label={"Password"}
        required={true}
        placeholder={"Enter Password"}
        type={"password"}
      />
      <p>
        Don't have an accoun?t -{" "}
        <span onClick={handleClick} className="text-purple-600 cursor-pointer">
          Sign Up
        </span>
      </p>
      <button
        onClick={login}
        className="bg-black flex justify-center items-center text-white hover:bg-black/90 transition p-2 rounded-md"
      >
        {pending ? <LoaderCircle className="w-4 h-4 animate-spin" /> : "Submit"}
      </button>
    </div>
  );
};

export default Signin;
