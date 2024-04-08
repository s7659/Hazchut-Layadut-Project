import { useAddManagerMutation, useGetManagersQuery } from "./managerApiSlice";
import React, {useEffect, useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import AddManager from "./addManager";
import CardManager from './cardManager'
function ManagerList() {
// const managers = useSelector((x) => x.TodoSlice.todos)

const {data,isSuccess,isError,error,refetch}=useGetManagersQuery()

useEffect(()=>
{
if(isSuccess){
console.log(data);

}
},[isSuccess])

    return (
       <>
       <div >
       {isSuccess?
       data.map((e)=>{
      return   <CardManager data={e} refetch={refetch}></CardManager>
       })
       :<></>}
        <AddManager/></div>
       </>
    )
}
export default ManagerList;
      

        



