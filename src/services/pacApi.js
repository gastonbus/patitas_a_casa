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
    getUserDetails: builder.query({
      query: (uid) => ({
        url: `users/${uid}.json`,
      }),
    }),
    putPet: builder.mutation({
      query: async (petData) => {
        return {
          url: 'pets.json',
          method: 'PUT',
          body: petData,
        };
      },
    }),
    putUser: builder.mutation({
      query: (userData) => ({
        url: `users/${userData.uid}.json`, // Asignar UID proporcionado en la URL
        method: 'PUT', // Usar PUT en lugar de POST para escribir en un ID específico
        body: userData, // Usar data para el cuerpo de la solicitud
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetPetsQuery,
  useGetUserDetailsQuery,
  usePutPetMutation,
  usePutUserMutation,
} = pacApi;
