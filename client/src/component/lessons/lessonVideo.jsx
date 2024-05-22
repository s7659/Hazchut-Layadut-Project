import React, { useEffect, useState } from 'react';
import './Article.css'
import { useGetAllVideosQuery } from '../app/videoApiSlice'
import ShowVideo from './ShowVideo'
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VideoList() {
    const { data, isError, isSuccess, error } = useGetAllVideosQuery()
    const navigate = useNavigate()
    const [userRole, setUserRole] = useState("");

    // useEffect(() => {
    //     const checkPermissions = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:1260/api/functionToken/" + localStorage.getItem("token"));
    //             if (response.data.ans) {
    //                 setUserRole(localStorage.getItem("role"));
    //             } else {
    //                 navigate("/login");
    //             }
    //         } catch (error) {
    //             console.error("Error checking permissions:", error);
    //         }
    //     }
    //     checkPermissions();
    // }, [navigate]);

    const handleAddVideoClick = () => {
        if (userRole === "admin" || userRole === "secretary") {
            navigate('../addVideo');
        } else {
            // Handle unauthorized user
            alert("You don't have permission to add videos.");
        }
    }

    return (
        <div>
            <br></br>
            {userRole && (userRole === "admin" || userRole === "secretary") && (
                <Button onClick={handleAddVideoClick}>Add Video</Button>
            )}
            {isError && console.log(error)}
            {isSuccess && console.log(data)}
            {isSuccess && data.map(element =>
                <ShowVideo path={element.path} />
            )}
        </div>
    )
}
