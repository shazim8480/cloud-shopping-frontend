import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";

// query
import { useGetProductsQuery } from "@/redux/feature/products/products-api";

// utils
import GenerateProductRow from "@/components/GenerateProductRow";
import Input from "@/components/Input";

export default function DashboardPage() {
  // query //
  const { data: getProducts } = useGetProductsQuery({
    refetchOnMountOrArgChange: true,
  });

  const [searchProduct, setSearchProduct] = useState("");

  // search handler
  const handleInputSearch = (e) => {
    const { name, value } = e.target;
    // setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSearchProduct(value);
  };

  // Filter products based on the search input
  const filteredProducts = getProducts?.products?.filter((item) =>
    item.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <section className="flex-grow p-6">
      <div className="mb-5">
        <h3 className="text-lg font-medium text-green-800">Inventory</h3>
        <div className="mt-5 space-y-3">
          <h4>Search Products</h4>
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="search"
              name="search"
              placeholder="Search Here ..."
              required
              value={searchProduct}
              onChange={handleInputSearch}
              type="text"
            />
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date Added</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Added By</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* render all products */}
          {/* {getProducts?.products?.map((item) => {
            let productId = item?.id;
            return <GenerateProductRow productId={productId} item={item} />;
          })} */}
          {filteredProducts?.map((item) => {
            let productId = item?.id;
            return <GenerateProductRow productId={productId} item={item} />;
          })}
        </TableBody>
      </Table>
    </section>
  );
}

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
