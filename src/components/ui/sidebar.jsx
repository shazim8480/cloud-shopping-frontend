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
        <button className="flex items-center w-full px-2 py-2 space-x-2 text-green-600 rounded-lg hover:bg-green-200 active:bg-green-300">
          {/* <IconHome className="w-4 h-4" /> */}
          <span className="text-sm font-medium">Product List</span>
        </button>
        <button className="flex items-center w-full px-2 py-2 space-x-2 text-green-800 bg-green-200 rounded-lg active:bg-green-300">
          {/* <IconTransactions className="w-4 h-4" /> */}
          <span className="text-sm font-medium">Add Product</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
