import React, { useEffect, useState } from "react";
import FormInput from "../components/Input/FormInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
const SignUp = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address", { toastId: "toast" });
      return;
    }
    // Check if first name contains only letters
    const firstNameRegex = /^[A-Za-z]+$/;
    if (!firstNameRegex.test(form.firstName)) {
      toast.error("First name should contain only letters", {
        toastId: "toast",
      });
      return;
    }

    // Check if last name contains only letters
    const lastNameRegex = /^[A-Za-z]+$/;
    if (!lastNameRegex.test(form.lastName)) {
      toast.error("Last name should contain only letters", {
        toastId: "toast",
      });
      return;
    }
    login(form);
  };
  return (
    <div className="flex w-auto my-24 items-center justify-center">
      <form className="w-1/2 border-2 border-[#D1FF99] flex flex-col">
        <label className="text-center text-4xl font-bold my-4">Sign Up</label>
        <FormInput
          placeholder={"First Name"}
          name={"firstName"}
          onChange={handleOnChange}
        />
        <FormInput
          placeholder={"Last Name"}
          name={"lastName"}
          onChange={handleOnChange}
        />
        <FormInput
          type="email"
          placeholder={"Email"}
          name={"email"}
          onChange={handleOnChange}
        />
        <FormInput
          type="password"
          placeholder={"Password"}
          name={"password"}
          onChange={handleOnChange}
        />
        <div className="flex items-center justify-center my-4">
          <button
            className="bg-[#153102] w-1/3 text-white p-2 rounded-xl hover:bg-[#418308] ease-out duration-300"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
