import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
// components
import Input from "@/components/Input";

// query
import { useSignInMutation } from "@/redux/feature/auth/auth-api";

// reducers
import { setUser } from "@/redux/feature/users/userSlice";
import Link from "next/link";

// fonts
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SignUpPage = () => {
  //   const [signIn] = useSignInMutation();
  const router = useRouter();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    // let response = await signIn(formData);
    if (response?.error?.data?.status === false) {
      alert(response?.error?.data?.error);
    } else {
      console.log("sign-up response", response);
      dispatch(setUser(response));
      router.push("/dashboard");
    }
  };

  return (
    <div
      className={`flex min-h-screen flex-col bg-green-50 items-center justify-between p-24 ${poppins.className}`}
    >
      {/* <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8"> */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-2xl font-semibold leading-3 text-center text-gray-800">
          Welcome to Cloud Shopping
        </h2>
        <h3 className="mt-10 text-xl leading-8 text-center text-green-800">
          Please Create an account to continue
        </h3>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          {/* name */}
          <div className="mt-2">
            <Input
              id={"name"}
              label={"Username"}
              name={"name"}
              type={"text"}
              autoComplete={"name"}
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          {/* email */}
          <div className="mt-2">
            <Input
              id={"email"}
              label={"Email Address"}
              name={"email"}
              type={"email"}
              autoComplete={"email"}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          {/* password */}
          <div className="mt-2">
            <Input
              id={"password"}
              label={"Password"}
              name={"password"}
              type={"password"}
              autoComplete={"password"}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sign up
            </button>

            <p className="mt-10 text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link
                href="/"
                className="font-semibold leading-6 text-green-600 hover:text-green-500"
              >
                Sign in here!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
