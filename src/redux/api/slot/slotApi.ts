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
    getSlotByService: builder.query({
      query: (id) => ({
        url: `/services/slots/${id}`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetSlotByServiceQuery } = slotApi;
