import apiSlice  from "../app/apiSlice";
const CategoryApiSlice =apiSlice.injectEndpoints({
 endpoints:(build)=>({
    getCategory:build.query({
        query:()=>({
          url:"/api/category"  
        })
    }), 
    addCategory:build.mutation({
        query:(category)=>({
            url:"/api/category" , 
            method:"POST",
            body:category
          }) 
    })
 })
})
export const {useGetCategoryQuery,useAddCategoryMutation}=CategoryApiSlice