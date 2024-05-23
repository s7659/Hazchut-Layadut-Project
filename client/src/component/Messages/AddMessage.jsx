import { useAddMessageMutation } from "./messagesApiSlice";
import React, {useRef, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Editor } from "primereact/editor";
import { Message } from "primereact/message";

const  AddMessage=()=> {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const [message, {isError, isSuccess, error}] =useAddMessageMutation()
    
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'הודעה נוספה בהצלחה!', detail: getValues('value') });
    };
    const [text, setText] = useState('');
    const defaultValues = {
        title: '',
        message:'',
        image:'',
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
        data.message=text;
        message(data)
        setVisible(false)
        
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };
    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();
    return (
        <div className="card flex justify-content-center">
            <Button label="הוסף הודעה" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Toast ref={toast} />
            <Dialog
                visible={visible}
                modal
                onHide={() => setVisible(false)}
                content={({ hide }) => (
                    <div className="card flex justify-content-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2">
                      

                        <Controller
                            name="title"
                            control={control}
                            rules={{ required: 'title is required.' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.name })}></label>
                                    <span className="p-float-label">
                                        <InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>ההודעה  שם</label>
                                    </span>
                                    {getFormErrorMessage(field.name)}
                                </>
                            )}
                        />

            <div className="card">
                
                <   Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
            </div>
                       
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
export default AddMessage      


   


