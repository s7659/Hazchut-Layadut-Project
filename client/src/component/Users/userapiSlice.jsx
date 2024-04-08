import apiSlice from "../app/apiSlice"
const userApiSlice =apiSlice.injectEndpoints({
 endpoints:(build)=>({
  getUsers:build.query({
    query:()=>({
      url:"/api/user"  
    })
}),
    addUser:build.mutation({
        query:(user)=>({
            url:"/api/user" , 
            method:"POST",
            body:user
          }) 
    }),
    deleteUser:build.mutation({
      query:(id)=>({
          url:`/api/user/${id}` , 
          method:"DELETE"
        }) 
  })
 })
})
export const {useGetUsersQuery,useAddUserMutation,useDeleteUserMutation}=userApiSlice