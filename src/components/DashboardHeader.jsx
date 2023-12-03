import { logOutUser } from "@/redux/feature/users/userSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userProfile = useSelector((state) => state.user);

  let userName = userProfile?.user?.data?.user?.name;

  // console.log(userProfile);

  useEffect(() => {
    if (userProfile?.user === null) {
      router.push("/");
    }
  }, [userProfile?.user, router]);

  const logOutHandler = () => {
    dispatch(logOutUser());
  };

  return (
    <header className="flex items-center px-4 bg-gray-100 rounded-lg lg:px-6 h-14 dark:bg-gray-800">
      <nav className="flex gap-4 ml-auto sm:gap-6">
        <h4 className="text-sm text-green-900 font-sm">
          Hi, {userName ? userName : "Guest"}
        </h4>
        <button
          onClick={() => logOutHandler()}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default DashboardHeader;
