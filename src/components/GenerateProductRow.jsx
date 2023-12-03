import React, { useState } from "react";
import { TableCell, TableRow } from "./ui/table";
import { formatTimestamp } from "@/lib/utils";
import Modal from "./ui/modal";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";

import { useDeleteProductMutation } from "@/redux/feature/products/products-api";

import { Button } from "./ui/button";

const GenerateProductRow = ({ productId, item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [deleteProduct] = useDeleteProductMutation();

  // delete product
  const handleDeleteProduct = async (id) => {
    const deletedResponse = await deleteProduct(id);
    console.log("deleted response", deletedResponse);
    if (deletedResponse?.data?.status === 200) {
      setModalVisible(false);
    } else {
      setModalVisible(false);
      alert("Error Deleting Product!");
    }
  };

  return (
    <TableRow key={productId}>
      <TableCell>{formatTimestamp(item?.created_at)}</TableCell>
      <TableCell>{item?.name}</TableCell>
      <TableCell>
        <span className="px-2 py-1 text-orange-700 rounded-md bg-amber-200">
          <IconTag className="inline-block w-4 h-4 mr-1" />
          {item?.category?.toLowerCase()}
        </span>
      </TableCell>
      <TableCell>{item?.created_by}</TableCell>

      <TableCell className="text-right">${item?.price}</TableCell>
      <TableCell>
        <Popover>
          <PopoverTrigger>
            <Button
              className="px-2 py-1 text-black bg-transparent rounded hover:bg-green-200 active:bg-green-300"
              type="button"
            >
              <IconMorevertical className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-40 bg-white">
            <button className="flex items-center w-full px-2 py-2 space-x-2 text-green-800 rounded-lg hover:bg-green-200 active:bg-green-300">
              <IconEdit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
            <button
              onClick={() => setModalVisible(true)}
              className="flex items-center w-full px-2 py-2 space-x-2 text-red-800 rounded-lg hover:bg-red-200 active:bg-red-300"
            >
              <IconDelete className="w-4 h-4" />
              <span className="text-sm font-medium">Delete</span>
            </button>
          </PopoverContent>
        </Popover>
      </TableCell>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={"Delete Confirmation"}
          bodyText={"Are you sure you want to delete your product?"}
          onBtnClick={() => handleDeleteProduct(productId)}
        />
      )}
    </TableRow>
  );
};

function IconTag(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

function IconEdit(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  );
}

function IconMorevertical(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  );
}

function IconDelete(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  );
}

export default GenerateProductRow;
