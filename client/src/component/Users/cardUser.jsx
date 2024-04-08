import { useAddUserMutation, useGetUsersQuery } from "./userapiSlice";
import React, {useEffect, useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Card } from 'primereact/card';
import AddUser from "./addUser";
import { useDeleteUserMutation } from "./userapiSlice";
function CardUser(props) {
    const [deleteUser, {isError, isSuccess, error}] =useDeleteUserMutation()

    const footer = (
        <>
            <Button  icon="pi pi-user-edit" style={{marginRight: '30%' , marginLeft: '3em' }}/>
            <Button  severity="secondary" icon="pi pi-trash" style={{ marginLeft: '30%',  }}  onClick={()=>{deleteUser(props.data._id);props.refetch()}}/>
        </>
    );

return (
       <>
        
        <div className="card flex justify-content-center" style={{marginLeft:"50px"}}>
        <grid>
            <Card title={`hi  ${props.data.name}`} subTitle={props.data.email} footer={footer} className="md:w-25rem">
                <p className="m-0">
                   
                </p>
            </Card>  
            </grid>

        </div>
      
       </>
    )}
    export default CardUser;
