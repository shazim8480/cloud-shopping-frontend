import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Input from "./Input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// query
import { useAddProductMutation } from "@/redux/feature/products/products-api";

export function AddProductForm() {
  const router = useRouter();
  const userProfile = useSelector((state) => state.user);
  let userName = userProfile?.user?.data?.user?.name;
  let userEmail = userProfile?.user?.data?.user?.email;

  // query //
  const [addProduct] = useAddProductMutation();

  const [category, setCategory] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: category,
    created_by: userName,
  });

  const handleCategoryChange = (val) => {
    setCategory(val);
    setFormData({
      ...formData,
      category: val,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit data", formData);
    let response = await addProduct(formData);
    if (response?.error) {
      alert(response?.error?.data?.message);
    } else {
      console.log("add product response", response);
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-grow mt-10 mb-10">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Add Product</CardTitle>
            <CardDescription className="pt-4">
              Enter product details to create a new product in store
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* product add form */}
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="pt-2">
                    <Input
                      id="name"
                      name="name"
                      label={"Product Name"}
                      placeholder="example product"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </div>
                  <div className="pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="role">Category</Label>
                      <Select
                        onValueChange={handleCategoryChange}
                        // value={formData.category}
                        className="z-10"
                        id="role"
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectGroup>
                            <SelectItem value="grocery">Grocery</SelectItem>
                            <SelectItem value="fashion">Fashion</SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="pharmaceuticals">
                              Pharmaceuticals
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Input
                      id="price"
                      name="price"
                      label={"Product Price"}
                      placeholder="$0.00"
                      required
                      value={formData.price}
                      onChange={handleInputChange}
                      type="text"
                    />
                  </div>
                  <div className="pt-2">
                    <Input
                      value={formData.created_by}
                      disabled={true}
                      id="username"
                      name="username"
                      label={"Created by"}
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <Input
                    value={userEmail ? userEmail : ""}
                    disabled={true}
                    id="email"
                    name="email"
                    label={"User Email"}
                    placeholder="johndoe@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Add Product
              </button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}

function IconDashboard(props) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}

function IconUsers(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSettings(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
