import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import { Card } from 'primereact/card';
import { MegaMenu } from 'primereact/megamenu';

export default function AdvancedDemo() {
    const [first, setFirst] = useState(0);
    const header = (
        <p className="m-0">
                   
        </p>
    );
    
    const items = [
            {
                label: 'Furniture',
                icon: 'pi pi-box',
                items: [
                    [
                        {
                            label: 'Living Room',
                            items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                        }
                    ],
                    [
                        {
                            label: 'Kitchen',
                            items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                        },
                        {
                            label: 'Bathroom',
                            items: [{ label: 'Accessories' }]
                        }
                    ],
                    [
                        {
                            label: 'Bedroom',
                            items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                        }
                    ],
                    [
                        {
                            label: 'Office',
                            items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                        }
                    ]
                ]
            },
            {
                label: 'Electronics',
                icon: 'pi pi-mobile',
                items: [
                    [
                        {
                            label: 'Computer',
                            items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                        }
                    ],
                    [
                        {
                            label: 'Home Theather',
                            items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                        }
                    ],
                    [
                        {
                            label: 'Gaming',
                            items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                        }
                    ],
                    [
                        {
                            label: 'Appliances',
                            items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports',
                icon: 'pi pi-clock',
                items: [
                    [
                        {
                            label: 'Football',
                            items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                        }
                    ],
                    [
                        {
                            label: 'Running',
                            items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                        }
                    ],
                    [
                        {
                            label: 'Swimming',
                            items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                        }
                    ],
                    [
                        {
                            label: 'Tennis',
                            items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                        }
                    ]
                ]
            }
        ];
    
    
            
    const onPageChange = (event) => {
        setFirst(event.first);
    };
    const footer = (
        <>

        <div className="card2">
            <Paginator first={first} rows={1} totalRecords={12} onPageChange={onPageChange} template="NextPageLink LastPageLink CurrentPageReport FirstPageLink PrevPageLink   " />

         
        </div>
    

        </>
    );

    return (
        <>
        
        <MegaMenu model={items} orientation="vertical" breakpoint="960px" />
        
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem" style={{minWidth:"60rem"}}>
                
                <img alt={first} src={`https://primefaces.org/cdn/primereact/images/nature/nature${first + 1}.jpg`} className="shadow-2 border-round max-w-full" />
                
            </Card>
        </div>
        </>
    )
}
        