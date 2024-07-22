import clsx from "clsx";
import React from "react";

const FormInput = ({ placeholder, type, onChange, onBlur, ref, id, label, required, name, errors, value}) => {

  console.log(name);
  return (
    <label htmlFor={id} className="w-full block">
        <p className=" text-sm text-neutral-700 ">{label} <span className="text-red-600 ml-1 mt-2">{required && "*"}</span></p>
      <input
        id={id}
        className={clsx("text-sm p-2 border rounded-md mt-2 w-full", name === "referrer_email" && !!value && "cursor-not-allowed")}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        name={name}
        value={value}
        disabled={name === "referrer_email" && !!value}
        
      ></input>
      {errors && <p className="text-sm px-3 py-[0.5px] bg-red-100/90 rounded-md mt-1 text-red-500">
        {errors[name]}
      </p>}
    </label>
  );
};

export default FormInput;
