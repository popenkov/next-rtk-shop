import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './product.types';

export const productApi = createApi({
  reducerPath: 'api/products', //путь до редьюсера
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }), // базовый урл для запросов по апи
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit = 10) => `products?limit=${limit}`,
    }),
    getProductsByCategory: build.query<IProduct[], string>({
      query: (category) => `products/category/${category}`,
    }),
    getCategories: build.query<string[], string>({
      query: () => `products/categories`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = productApi;
