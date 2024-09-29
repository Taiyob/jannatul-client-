import { baseApi } from "../baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // createService: builder.mutation({
    //   query: (serviceInfo) => ({
    //     url: "/services",
    //     method: "POST",
    //     body: serviceInfo,
    //   }),
    // }),
    getAvailableSlots: builder.query({
      query: () => ({
        url: `/services/slots/availability`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
    getSlotByService: builder.query({
      query: (id) => ({
        url: `/services/slots/${id}`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
    getSlotsById: builder.query({
      query: (id) => ({
        url: `/services/slots/slot/${id}`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetSlotByServiceQuery, useGetSlotsByIdQuery } = slotApi;
