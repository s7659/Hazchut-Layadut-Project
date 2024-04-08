import { useAddUserMutation, useGetUsersQuery } from "./userapiSlice";
import React, {useEffect, useRef, useState } from "react";

import CardUser from './cardUser'
function UsersList() {

const {data,isSuccess,isError,error,refetch}=useGetUsersQuery()

useEffect(()=>
{
if(isSuccess){


}
},[isSuccess])

    return (
       <>
       <div >
       {isSuccess?
       data.map((e)=>{
      return   <CardUser data={e} refetch={refetch}></CardUser>
       })
       :<></>}
        </div>
       </>
    )
}
export default UsersList;
      

        



