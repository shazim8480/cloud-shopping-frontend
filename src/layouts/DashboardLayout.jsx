import Sidebar from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="w-full p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
        {/* <DashboardHeader/> */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
