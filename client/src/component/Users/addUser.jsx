import { useAddUserMutation } from "./userapiSlice";
import React, {useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { useRegisterMutation } from "../app/authApiSlice";
        

const AddUser=(props)=> {
    
    
    const [visible, setVisible] = useState(true);
    const toast = useRef(null);
    const [register, {isError, isSuccess, error}] =useRegisterMutation()
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'נרשמת בהצלחה!', detail: getValues('value') });
    };
    // const showError = () => {
    //     toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
    // }

    const defaultValues = {
        name: '',
        userName:'',
        password:'',
        phone:'',
        email:'',
        roles:'refresh'
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.name && show();
        console.log(data);
        register(data)
        setVisible(false)
        
    };



    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };
// console.log(visible);
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="card flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">

                       

                        <Controller
                            name="name"
                            control={control}
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
                            rules={{ required: 'userName is required.'}}
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
                            rules={{ required: 'email is required.',pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'כתובת אימייל לא חוקית' } }}
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
                        <Button  label=" הוסף " type="submit" icon="pi pi-check" />
                        <Button onClick={()=>setVisible(false)} label=" בטל " icon="pi pi-times" />
                    </div>
                        
                    </form>
                </div>
                )}
            ></Dialog>
        </div>
    )
}
export default AddUser      





