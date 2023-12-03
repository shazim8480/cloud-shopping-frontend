import {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "@/constants/url";
import { api } from "@/redux/api/apiSlice";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getProducts: builder.query({
      query: () => ({
        url: `${GET_ALL_PRODUCTS}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    // add new product
    addProduct: builder.mutation({
      query: (data) => ({
        url: `${ADD_PRODUCT}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;
