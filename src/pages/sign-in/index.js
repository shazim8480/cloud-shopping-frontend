import React from "react";
import Image from "next/image";
// components
import Input from "@/components/Input";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-2xl font-semibold leading-3 text-center text-gray-800">
          Welcome to Cloud Shopping
        </h2>
        <h3 className="mt-10 text-xl leading-8 text-center text-green-800">
          Please Sign in to continue
        </h3>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {/* email */}
          <div className="mt-2">
            <Input
              id={"email"}
              label={"Email Address"}
              name={"email"}
              type={"email"}
              autoComplete={"email"}
              required
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
            />
          </div>

          <div>
            <button className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
              <Link href={"/dashboard"}>Sign in</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
