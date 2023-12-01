import Sidebar from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="max-w-screen-2xl">
        {/* <DashboardHeader/> */}
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
