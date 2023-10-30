import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://api.slingacademy.com/v1/sample-data/';

export const photosApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => 'photos',
    }),
    getPhotoById: builder.query({
      query: (id) => `photos/${id}`,
    }),
  }),
});

export const { useGetPhotosQuery, useGetPhotoByIdQuery } = photosApi;
