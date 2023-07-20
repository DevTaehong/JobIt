// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// NOTE - Source: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
const jSearchApiKey = process.env.NEXT_PUBLIC_X_RAPID_API_KEY;

// Define a service using a base URL and expected endpoints
export const jsearchApi = createApi({
  reducerPath: "jsearchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsearch.p.rapidapi.com/",
    // NOTE source 1: https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery#setting-default-headers-on-requests
    // NOTE source 2: https://medium.com/@ziyasayed/setting-up-redux-toolkit-query-with-typescript-in-nextjs-a-step-by-step-tutorial-5096033dcac0
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", jSearchApiKey || "");
      headers.set("X-RapidAPI-Host", "jsearch.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getJobs: builder.query<any, void>({
      query: () =>
        `/search?query=Developer&page=1&num_pages=1&date_posted=today`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobsQuery } = jsearchApi;
