import Link from "next/link";
import React from "react";

const DashboardHeader = () => {
  return (
    <header className="flex items-center px-4 bg-gray-100 rounded-lg lg:px-6 h-14 dark:bg-gray-800">
      <nav className="flex gap-4 ml-auto sm:gap-6">
        <h4 className="text-sm text-green-900 font-sm">Hi, Person</h4>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Log Out
        </Link>
      </nav>
    </header>
  );
};

export default DashboardHeader;
