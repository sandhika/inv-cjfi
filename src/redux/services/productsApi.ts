import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Product,Category} from '../models';

export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], null>({
      query: () => "/products/get-product",
    }),
    getProductById: builder.query<Product, { id: string }>({
      query: ({ id }) => `/products/get-product/${id}`,
    }),
    addProducts:  builder.mutation<Product, any>({
      query: payload => ({
        url: "/products/add-product",
        method: "POST",
        body: payload,
      }),
    }),
    editProducts:  builder.mutation<Product, any>({
      query: payload => ({
        url: "/products/put-product",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;