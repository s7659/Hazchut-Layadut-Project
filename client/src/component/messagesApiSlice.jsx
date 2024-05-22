import apiSlice  from "./app/apiSlice";
const messageApiSlice =apiSlice.injectEndpoints({
 endpoints:(build)=>({
    getMessages:build.query({
        query:()=>({
          url:"/api/messages"  ,
          providesTags: ["Message"]
        })
    }), 
    addMessage:build.mutation({
        query:(message)=>({
            url:"/api/messages" , 
            method:"POST",
            body:message
          }) 
    }),
    deleteMessage:build.mutation({
      query:(id)=>({
          url:`/api/messages/${id}` , 
          method:"DELETE"
        }) 
  }),
  updateMessage:build.mutation({
    query:(data)=>({
        url:`/api/messages` , 
        method:"PUT",
        body:data,
        invalidatesTags: ["Message"]
      }) 
})
 })
})
export const {useGetMessagesQuery,useAddMessageMutation,useDeleteMessageMutation,useUpdateMessageMutation}=messageApiSlice