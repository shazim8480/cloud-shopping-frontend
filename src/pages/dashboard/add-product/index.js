import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const AddProductPage = () => {
  return <div>Add product here</div>;
};

export default AddProductPage;

AddProductPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
