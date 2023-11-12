import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '../types/productTypes.ts';

// When you call createApi, it automatically generates and returns an API service "slice" object structure containing Redux logic you
// can use to interact with the endpoints you defined. This slice object includes a reducer to manage cached data, a middleware to
// manage cache lifetimes and subscriptions, and selectors and thunks for each endpoint. If you imported createApi from the
// React-specific entry point, it also includes auto-generated React hooks for use in your components.
export const productApi = createApi({
  // The reducerPath is a unique key that your service will be mounted to in your store.
  // Check the store to see how it is embedded
  reducerPath: 'userApi',

  //This is a very small wrapper around fetch that aims to simplify HTTP requests. It is not a full-blown replacement for axios,
  //superagent, or any other more heavyweight library, but it will cover the vast majority of your HTTP request needs.
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),

  // An array of string tag type names. Specifying tag types is optional, but you should define them so that they can be used for
  // caching and invalidation. When defining a tag type, you will be able to provide them with providesTags and invalidate them with
  // invalidatesTags when configuring endpoints.
  tagTypes: ['Product'],

  // Endpoints are just a set of operations that you want to perform against your server. You define them as an object using the
  // builder syntax. There are two basic endpoint types: query and mutation.
  endpoints: (builder) => ({
    // products query endpoint
    products: builder.query<ProductType[], void>({
      query: () => '/products', // It will be baseURL + query ==> https://fakestoreapi.com/products

      keepUnusedDataFor: 30,

      // Used by query endpoints. Determines which 'tag' is attached to the cached data returned by the query. Expects an array of
      // tag type strings, an array of objects of tag types with ids, or a function that returns such an array.
      providesTags: ['Product'],
    }),
    // product query endpoint
    product: builder.query<ProductType, number | null>({
      query: (id) => `/products/${id}`, // It will be baseURL + query ==> https://fakestoreapi.com/products/{id}

      // Used by query endpoints. Determines which 'tag' is attached to the cached data returned by the query. Expects an array of
      // tag type strings, an array of objects of tag types with ids, or a function that returns such an array.
      providesTags: ['Product'],
    }),
    // addProduct mutation endpoint
    addProduct: builder.mutation<void, ProductType>({
      //It will be baseURL + url + method(POST) + body
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      // Used by mutation endpoints. Determines which cached data should be either re-fetched or removed from the cache. Expects the
      // same shapes as providesTags
      invalidatesTags: ['Product'],
    }),

    // Didn't implement the updateProduct mutation.
    // updateProduct mutation endpoint
    updateProduct: builder.mutation<void, ProductType>({
      //It will be baseURL + url + method(PATCH) + body
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: 'PATCH',
        body: rest,
      }),
      // Used by mutation endpoints. Determines which cached data should be either re-fetched or removed from the cache. Expects the
      // same shapes as providesTags
      invalidatesTags: ['Product'],
    }),
    // deleteProduct mutation endpoint
    deleteProduct: builder.mutation<void, number>({
      //It will be baseURL + url + method(DELETE) + body
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      // Used by mutation endpoints. Determines which cached data should be either re-fetched or removed from the cache. Expects the
      // same shapes as providesTags
      invalidatesTags: ['Product'],
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints.
// It's basicallu use+{query/mutation endpoint}+{Query/Mutation}
export const {
  useProductsQuery,
  useProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productApi;
