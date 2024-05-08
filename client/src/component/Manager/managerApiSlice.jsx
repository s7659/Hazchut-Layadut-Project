import apiSlice  from "../app/apiSlice";
const managerApiSlice =apiSlice.injectEndpoints({
 endpoints:(build)=>({
    getManagers:build.query({
        query:()=>({
          url:"/api/user/managers"  ,
          providesTags: ["Manager"]
        })
    }), 
    addManager:build.mutation({
        query:(manager)=>({
            url:"/api/user" , 
            method:"POST",
            body:manager
          }) 
    }),
    deleteManager:build.mutation({
      query:(id)=>({
          url:`/api/user/${id}` , 
          method:"DELETE"
        }) 
  }),
  updateManager:build.mutation({
    query:(data)=>({
        url:`/api/user` , 
        method:"PUT",
        body:data,
        invalidatesTags: ["Manager"]
      }) 
})
 })
})
export const {useGetManagersQuery,useAddManagerMutation,useDeleteManagerMutation,useUpdateManagerMutation}=managerApiSlice