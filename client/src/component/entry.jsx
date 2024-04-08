import React, { useEffect, useRef } from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AddUser from './Users/addUser';
import { useState } from "react";
import { useLoginMutation } from './app/authApiSlice';
import { useDispatch } from 'react-redux';
import { setToken } from './app/authSlice';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"
function Entry() {
    const [flag, setFlag] = useState(false);
    const password = useRef("")
    const name = useRef("")
    const dispatch = useDispatch()
    const [loginFunc, { isError, error, isSuccess, data }] = useLoginMutation()
    const navigate=useNavigate()
    useEffect(() => {
        if (data)
        {
            console.log(data.accesToken)
            // if(isSuccess)
            dispatch(setToken({ token: data.accesToken }))
            const userDecode = jwtDecode( data.accesToken)
            const { _id, userName, name, email, phone, roles } = userDecode
            if(roles=="admin")
            {
                navigate("/homeManager")
                window.location.reload(false)
            }
            else
            {
                navigate("/homeUsers")
                window.location.reload(false)
            }

        }

    }, [isSuccess])
    const hanleLogin = () => {

        loginFunc({ name: name.current, password: password.current })
       
    }
    return (

        <div className="card1">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">שם משתמש</label>
                        <InputText id="username" type="text" className="w-12rem" onChange={e => name.current = e.target.value} />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">סיסמא</label>
                        <InputText id="password" type="password" className="w-12rem" onChange={e => password.current = e.target.value} />
                    </div>
                    <Button onClick={hanleLogin} label="כניסה כמשתמש" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>או</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>או</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="רישום" onClick={() => setFlag(true)} icon="pi pi-user-plus" severity="success" className="w-10rem" ></Button>
                </div>
            </div>
            {flag ? <AddUser /> : <></>}
        </div>

    )
}
export default Entry;       