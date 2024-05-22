import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import {useGetMessagesQuery}  from './messagesApiSlice'



export default function Message() {
    const {data,isSuccess,isError,error,refetch}=useGetMessagesQuery()

useEffect(()=>
{
if(isSuccess){
console.log(data);

}
},[isSuccess])
    const [messages, setMessage] = useState([]);

    const responsiveOptions = [
        
    ];
    useEffect(() => {
        // <data.then((data) => setMessage(data.slice(0, 9)));
        // data.getProductsSmall().then((data) => setMessage(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <div alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{messages.title}</h4>
                    <h6 className="mt-0 mb-3">${messages.message}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={messages} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
 }
        