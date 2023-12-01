import { AddProductForm } from "@/components/AddProductForm";
import DashboardLayout from "@/layouts/DashboardLayout";
import React from "react";

const AddProductPage = () => {
  return (
    <div className="bg-slate-100">
      <AddProductForm />
    </div>
  );
};

export default AddProductPage;

AddProductPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
