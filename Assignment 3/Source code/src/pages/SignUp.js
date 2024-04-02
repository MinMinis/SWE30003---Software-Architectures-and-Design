import React from "react";
import FormInput from "../components/Input/FormInput";
const SignUp = () => {
  return (
    <div className="flex w-auto my-36 items-center justify-center">
      <form className="w-1/2 border-2 border-[#D1FF99] flex flex-col">
        <label className="text-center text-4xl font-bold my-4">Sign Up</label>
        <FormInput placeholder={"First Name"} name={"firstName"} />
        <FormInput placeholder={"Last Name"} name={"lastName"} />
        <FormInput placeholder={"Email"} name={"email"} />
        <FormInput placeholder={"Password"} name={"password"} />
        <div className="flex items-center justify-center my-4">
          <button className="bg-[#153102] w-1/3 text-white p-2 rounded-xl hover:bg-[#418308] ease-out duration-300">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
