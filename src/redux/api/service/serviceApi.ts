import { baseApi } from "../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createService: builder.mutation({
      query: (serviceInfo) => ({
        url: "/services",
        method: "POST",
        body: serviceInfo,
      }),
    }),
    getService: builder.query({
      query: () => ({
        url: `/services`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
  }),
});

export const { useCreateServiceMutation, useGetServiceQuery } = serviceApi;
