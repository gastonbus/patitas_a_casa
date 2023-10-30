import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiBaseUrl } from '../firebase/api';

// Define a service using a base URL and expected endpoints
export const pacApi = createApi({
  reducerPath: 'pacApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories.json',
    }),
    getPets: builder.query({
      query: () => 'pets.json',
    }),
  }),
});

export const { useGetCategoriesQuery, useGetPetsQuery } = pacApi;
