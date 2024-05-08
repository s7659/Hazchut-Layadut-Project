import { useAddManagerMutation, useGetManagersQuery } from "./managerApiSlice";
import React, {useEffect, useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import { useDeleteManagerMutation } from "./managerApiSlice";
import UpDateManager from "./upDateManager";
function CardManager(props) {

    const [update, setUpdate] = useState(0);
    {update!=0?<UpDateManager update/>:<CardManager/>}
    const [deleteManager, {isError, isSuccess, error}] =useDeleteManagerMutation()
    // const [updateManager, {isError, isSuccess, error}] =useUpdateManagerMutation()
    const footer = (
        <>
            <UpDateManager data={props.data} refetch={props.refetch}/> 
            <Button  severity="secondary" icon="pi pi-trash" style={{ marginLeft: '30%',  }} onClick={()=>{deleteManager(props.data._id);props.refetch()}}/>
        </>
    );

return (
       <>
        
        <div className="card flex justify-content-center" style={{marginLeft:"50px"}}>
        <grid>
            <Card title={`hi  ${props.data.name}`} subTitle="Card subtitle" footer={footer} className="md:w-25rem">
                <p className="m-0">
                   
                </p>
            </Card>  
            </grid>

        </div>
     
       </>
    )}
    export default CardManager;
