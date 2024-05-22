import { useAddLessonMutation, useGetLessonsQuery } from "./LessonApiSlice";
import React, { useEffect, useRef, useState } from "react";
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
import { useGetCategoryQuery } from './CategoryApiSlice'

const AddLesson = () => {
    const [selectedType, setSelectedType] = useState('טקסט');
    const [selectedFile, setSelectedFile] = useState();

    const [selectedCategory, setselectedCategory] = useState('');
    const [visible, setVisible] = useState(false);
    const [category,setCategory]=useState([])
    const toast = useRef(null);
    const [register, { isError, isSuccess, error }] = useRegisterMutation()
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };
    const toast1 = useRef(null);
    const onUpload = ({files}) => {
        debugger
        const file1 = files[0];
        setSelectedFile(file1);
    };
    const defaultValues = {
        name: '',
        code: '',
        categoryCode: '',
        type: '',
        // path: '',
        active: 'true',
        present: ''
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
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('code', data.code);
        formData.append('categoryCode', data.categoryCode);
        formData.append('path', selectedFile);
        formData.append('type', data.type);
        formData.append('active', data.active);
        formData.append('present', data.present);

        try {
            const response =  register(formData).unwrap();
            debugger
            console.log('Upload response:', response);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Video uploaded successfully' });
            // reset();
            setSelectedFile(null); // Clear the selected file after upload
            // setMoveList(true);
        } catch (uploadError) {
            console.error('Upload error:', uploadError);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to upload video' });
        }
        toast1.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });


        register(data)
        setVisible(false)

    };
    const { data, isSuccess: is, isError: ie, error: e, refetch } = useGetCategoryQuery()
 
    useEffect(() => {
        if (is) {
            let a=category
            data.forEach(element => {
               a.push({name:element.Name})
            })
            setCategory(a)
        }
    }, [is])
    console.log(data);
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
                                      
                                        <label htmlFor={field.name}>סוג השיעור</label>
                                        <span className="p-float-label">
                                           {category.length?<Dropdown id={field.name} value={selectedType} onChange={(e) => setSelectedType(e.value)} options={category}
                                                optionLabel="name"
                                                placeholder="בחר סוג שיעור" style={{ minWidth: '14rem' }} />:<></>}
                                            {/* </                                 div> */}

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
                                                placeholder="בחר סוג שיעור" style={{ minWidth: '14rem' }} />
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
                                            <FileUpload uploadHandler={onUpload} mode="basic" name="demo[]" url="/api/upload" accept="video/*" maxFileSize={1000000} onUpload={onUpload} />
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
                                <Button onClick={() => setVisible(false)} label=" בטל " icon="pi pi-times" />
                            </div>



                        </form>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
export default AddLesson





