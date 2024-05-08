import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    const [first, setFirst] = useState(0);
    const header = (
        <p className="m-0">
                   
        </p>
    );
    

    const onPageChange = (event) => {
        setFirst(event.first);
    };
    const footer = (
        <>

        <div className="card">
            <Paginator first={first} rows={1} totalRecords={12} onPageChange={onPageChange} template="NextPageLink LastPageLink CurrentPageReport FirstPageLink PrevPageLink   " />

         
        </div>
    

        </>
    );

    return (
        // <div className="p-3 text-center">
            
        // </div>
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                
                <img alt={first} src={`https://primefaces.org/cdn/primereact/images/nature/nature${first + 1}.jpg`} className="shadow-2 border-round max-w-full" />
            </Card>
        </div>
    )
}
        