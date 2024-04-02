import React, { useEffect, useState } from "react";
import FormInput from "../components/Input/FormInput";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // Redirect if user is already authenticated
    if (isAuthenticated) {
      navigate("/menu");
    }
  }, [isAuthenticated, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((val) => val === "")) {
      toast.error("Please fill in all fields", { toastId: "toast" });
      return;
    }
    login(form);
  };

  return (
    <div className="flex w-auto my-36 items-center justify-center">
      <form className="w-1/2 border-2 border-[#D1FF99] flex flex-col">
        <label className="text-center text-4xl font-bold my-4">Log In</label>
        <FormInput
          placeholder={"Email"}
          name={"email"}
          onChange={handleOnChange}
        />
        <FormInput
          placeholder={"Password"}
          name={"password"}
          onChange={handleOnChange}
        />
        <div className="flex items-center justify-center my-4">
          <button
            className="bg-[#153102] w-1/3 text-white p-2 rounded-xl hover:bg-[#418308] ease-out duration-300"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
