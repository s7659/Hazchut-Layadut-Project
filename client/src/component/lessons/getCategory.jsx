
import { useEffect } from 'react'
import {useGetCategoryQuery} from './CategoryApiSlice'

function GetCategory(){
const {data,isSuccess,isError,error,refetch}=useGetCategoryQuery()
let category={};
useEffect(()=>
{
if(isSuccess){
    category=data.map((e)=>e.Name)
}
},[isSuccess])
console.log(data);
//debugger
return(
    <>
    
   
    </>
)

}
export default GetCategory;