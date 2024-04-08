import { useAddManagerMutation } from "./managerApiSlice";
import React, {useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { useRegisterMutation } from "../app/authApiSlice";

const  UpDateManager=(props)=> {
    console.log({props});
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const [register, {isError, isSuccess, error}] =useRegisterMutation()
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        name: '',
        userName:'',
        password:'',
        phone:'',
        email:'',
        roles:'admin'
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        console.log("111111");
        data.name && show();
        console.log(data);
        register(data)
        setVisible(false)
        
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <Button label="הוסף מנהל" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="card flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                        <Toast ref={toast} />

                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'name is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>שם</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

                        <Controller
                            name="userName"
                            control={control}
                            rules={{ required: 'userName is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>שם משתמש</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'password is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>סיסמא</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            rules={{ required: 'phone is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>פלאפון</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'email is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>מייל</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    <div className="flex align-items-center gap-2">
                        <Button label=" הוסף " type="submit" icon="pi pi-check" />
                        <Button onClick={()=>setVisible(false)} label=" בטל " icon="pi pi-times" />
                    </div>


                        
                    </form>
                </div>
                )}
            ></Dialog>
        </div>
    )
}
export default UpDateManager      





