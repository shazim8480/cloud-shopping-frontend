import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0 w-56 h-screen p-4 text-green-800 bg-green-50">
      <div className="mb-4 bg-green-800">
        <h3 className="py-4 text-lg font-medium text-center text-green-200">
          Cloud Shopping
        </h3>
      </div>
      <nav className="space-y-2">
        <Link href={"/dashboard"} className="text-sm font-medium">
          <button className="flex items-center w-full px-2 py-2 space-x-2 text-green-800 rounded-lg hover:bg-green-200 ">
            {/* <IconHome className="w-4 h-4" /> */}
            Product List
          </button>
        </Link>

        <Link href={"/dashboard/add-product"} className="text-sm font-medium">
          <button className="flex items-center w-full px-2 py-2 space-x-2 text-green-800 rounded-lg hover:bg-green-200 ">
            {/* <IconTransactions className="w-4 h-4" /> */}
            Add Product
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
