
import { useEffect } from 'react'
import {useGetCategoryQuery} from './CategoryApiSlice'

function GetCategory(){
const {data,isSuccess,isError,error,refetch}=useGetCategoryQuery()

useEffect(()=>

{
if(isSuccess){



}
},[isSuccess])
console.log(data);
//debugger
const category=data.map((e)=>e.Name)
return(
    <>
    
    {console.log(category)}
    </>
)

}
export default GetCategory;