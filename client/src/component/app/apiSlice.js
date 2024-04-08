import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'http://localhost:7654/'
    }),
    endpoints: () => ({}),
})
export default apiSlice 