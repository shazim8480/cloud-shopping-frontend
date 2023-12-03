import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/ui/sidebar";
import React from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const DashboardLayout = ({ children }) => {
  return (
    <div className={`flex justify-between ${poppins.className}`}>
      <Sidebar />
      <div className="w-full p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
