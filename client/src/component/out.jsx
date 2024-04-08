import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeToken } from "./app/authSlice"
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"

export default function Out() {

    const [visible1, setVisible1] = useState(true);
    const [out, setOut] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(() => {
    //     if (out) {
    //         dispatch(removeToken())
    //         // window.location.reload(false)
    //         navigate("/")
    //     }
    // }, [out])

    return (
        <>
            <Dialog visible={visible1} onHide={() => setVisible1(false)}>
                <div className="card flex justify-content-center">
                    ?? האם אתה בטוח שברצונך להתנתק
                </div><br></br>
                <div className="card flex justify-content-center">
                    <Button onClick={() =>{ 
                        dispatch(removeToken());
                        navigate('/homeUsers');
                        setVisible1(false);
                        window.location.reload(false)
                    }} label="לאישור" />
                </div>
            </Dialog>
        </>
    )
}

