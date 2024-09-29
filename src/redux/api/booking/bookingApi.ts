import { baseApi } from "../baseApi";

const BookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingInfo) => ({
        url: "/bookings",
        method: "POST",
        body: bookingInfo,
      }),
    }),
    getBooking: builder.query({
      query: () => ({
        url: `/services`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
    getSingleBooking: builder.query({
      query: (id) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
      //invalidatesTags: ["user"],
    }),
  }),
});

export const { useCreateBookingMutation } = BookingApi;
