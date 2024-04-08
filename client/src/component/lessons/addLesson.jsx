import { useAddLessonMutation } from "./LessonApiSlice";
import React, {useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { useRegisterMutation } from "../app/authApiSlice";
import { CascadeSelect } from 'primereact/cascadeselect';
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from 'primereact/fileupload';

const  AddLesson=()=> {
    const [selectedType, setSelectedType] = useState('טקסט');
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const [register, {isError, isSuccess, error}] =useRegisterMutation()
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };
    const toast1 = useRef(null);
    const onUpload = () => {
        toast1.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    const defaultValues = {
        name: '',
        code: '',
        categoryCode:'',
        type:'',
        path:'',
        active:'true',
        present:''
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

    const types = [
        {
            name: 'אודיו'
        },
        {
            name: 'וידיאו',
        },
        {
            name: 'טקסט',
 
        }
    ];

    


    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <Button label="הוסף שיעור  " icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Toast ref={toast} />
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
                            name="code"
                            control={control}
                            rules={{ required: 'code is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>קוד שיעור </label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

                        <Controller
                            name="categoryCode"
                            control={control}
                            rules={{ required: 'categoryCode is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>קוד קטגוריה</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

                        <Controller
                            name="type"
                            control={control}
                            render={({ field }) => (
                                <>  
                                <label htmlFor={field.name}>סוג השיעור</label>
                                    {/* <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label> */}
                                    <span className="p-float-label">
                                        {/* <InputText  value={field.value}  onChange={(e) => field.onChange(e.target.value)} /> */}
                                        {/* <div className="card flex justify-content-center"> */}
                                        <Dropdown id={field.name} value={selectedType} onChange={(e) => setSelectedType(e.value)} options={types} 
                                        optionLabel="name" 
                                        placeholder="בחר סוג שיעור" style={{ minWidth: '14rem' }}  />
        {/* </                                 div> */}
                                      
                                    </span>
                                </>
                            )}
                        />

                        <Controller
                            name="path"
                            control={control}
                            rules={{ required: 'path is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={onUpload} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <Toast ref={toast1}></Toast>
                                         <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                 {/*  className="card flex justify-content-center" */}
                                       
                                
                                </>
                                
                            )}
                            />
                            <Controller
                            name="present"
                            control={control}
                            rules={{ required: 'present is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>הצגה</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                        <Controller
                            name="active"
                            control={control}
                            rules={{ required: 'active is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>האם פעיל?</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />
                    <div className="flex align-items-center gap-2">
                        <Button label="הוסף שיעור  " type="submit" icon="pi pi-check" />
                        <Button onClick={()=>setVisible(false)} label=" בטל " icon="pi pi-times" />
                    </div>


                        
                    </form>
                </div>
                )}
            ></Dialog>
        </div>
    )
}
export default AddLesson      





