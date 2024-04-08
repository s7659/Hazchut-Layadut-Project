import apiSlice  from "../app/apiSlice";
const lessonApiSlice =apiSlice.injectEndpoints({
 endpoints:(build)=>({
    getLessons:build.query({
        query:()=>({
          url:"/api/lesson"  
        })
    }), 
    addLesson:build.mutation({
        query:(lesson)=>({
            url:"/api/lesson" , 
            method:"POST",
            body:lesson
          }) 
    })
 })
})
export const {useGetLessonsQuery,useAddLessonMutation}=lessonApiSlice