import apiSlice  from "../app/apiSlice";
const managerApiSlice =apiSlice.injectEndpoints({
 endpoints:(build)=>({
    getManagers:build.query({
        query:()=>({
          url:"/api/user/managers"  
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
    query:(id)=>({
        url:`/api/user/${id}` , 
        method:"PUT"
      }) 
})
 })
})
export const {useGetManagersQuery,useAddManagerMutation,useDeleteManagerMutation,useUpdateManagerMutation}=managerApiSlice