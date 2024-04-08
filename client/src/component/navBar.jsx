import { Menubar } from 'primereact/menubar';
import FromToken from './app/fromToken';
import 'primeicons/primeicons.css';

function NavBarUsers() {
    const {roles}=FromToken()
        const items = [
        {
            label: 'דף הבית',
            icon: 'pi pi-building-columns',
            url:'/homeUsers'
        },
        {
            label: 'פרסומים',
            icon: 'pi pi-star',
            url:'/homeUsers/messages'
        },
        {
            label: 'שיעורים',
            icon: 'pi pi-server',
            items: [
                {
                    label: 'זכות לשו"ת',
                    icon: 'pi pi-book',
                    url:'/homeUsers/questions'
                },
                {
                    label: 'תהילים',
                    icon: 'pi pi-book',
                    url:'/homeUsers/tehilim'
                },
                {
                    label: 'הלכה',
                    icon: 'pi pi-book',
                    url:'/homeUsers/halacha'
                },
                {
                    label: ' (גמרא) עמוד יומי ',
                    icon: 'pi pi-book',
                    url:'/homeUsers/gmara'
                },
                {
                    label: 'פרשת שבוע',

                    icon: 'pi pi-book',
                    items: [
                        {
                            label: 'בראשית',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah/bereshit'
                        },
                        {
                            label: 'שמות',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah/shmot'
                        },
                        {
                            label: 'ויקרא',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah'
                        },
                        {
                            label: 'במדבר',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah'
                        },
                        {
                            label: 'דברים',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah',
                        }
        
                    ]
                }
            ]
        },
        {
            label: 'צור קשר',
            icon: 'pi pi-envelope',
            url:'/homeUsers/contact'
        },
        {
            label: 'התחברות / הרשמה ',
            icon: 'pi pi-envelope',
            url:'/entry'
        }
      
    ];

        const items1 = [
        {
            label: 'דף הבית',
            icon: 'pi pi-home',
            url:'/homeUsers'
        },
        {
            label: 'פרסומים',
            icon: 'pi pi-star',
            url:'/homeUsers/messages'
        },
        {
            label: 'שיעורים',
            icon: 'pi pi-server',
            items: [
                {
                    label: 'זכות לשו"ת',
                    icon: 'pi pi-book',
                    url:'/homeUsers/questions'
                },
                {
                    label: 'תהילים',
                    icon: 'pi pi-book',
                    url:'/homeUsers/tehilim'
                },
                {
                    label: 'הלכה',
                    icon: 'pi pi-book',
                    url:'/homeUsers/halacha'
                },
                {
                    label: ' (גמרא) עמוד יומי ',
                    icon: 'pi pi-book',
                    url:'/homeUsers/gmara'
                },
                {
                    label: 'פרשת שבוע',

                    icon: 'pi pi-book',
                    items: [
                        {
                            label: 'בראשית',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah'
                        },
                        {
                            label: 'שמות',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah'
                        },
                        {
                            label: 'ויקרא',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah'
                        },
                        {
                            label: 'במדבר',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah'
                        },
                        {
                            label: 'דברים',
                            id:'5',
                            icon: 'pi pi-book',
                            url:'/homeUsers/torah',
                            BarProp:'dvarim'
                        }
        
                    ]
                }
            ]
        },
        {
            label: 'צור קשר',
            icon: 'pi pi-envelope',
            url:'/homeUsers/contact'
        },
        {
            label: ' התנתקות',
            icon: 'pi pi-envelope',
            url:'/homeUsers/out'
        }
      
    ];

       const items2 = [
        {
            label: 'דף הבית',
            icon: 'pi pi-home',
            url:'/homeManager'
        },
        {
            label: 'פרסומים',
            icon: 'pi pi-star',
            url:'/homeManager/messages'
        },
        {
            label: 'שיעורים',
            icon: 'pi pi-server',
            items: [
                {
                    label: 'זכות לשו"ת',
                    icon: 'pi pi-book',
                    url:'/homeManager/questions'
                },
                {
                    label: 'תהילים',
                    icon: 'pi pi-book',
                    url:'/homeManager/tehilim'
                },
              
                {
                    label: 'הלכה',
                    icon: 'pi pi-book',
                    url:'/homeManager/halacha'
                },
                {
                    label: ' (גמרא) עמוד יומי ',
                    icon: 'pi pi-book',
                    url:'/homeManager/gmara'
                },

                {
                    label: 'פרשת שבוע',

                    icon: 'pi pi-book',
                    position:'left',
                    items: [
                        {
                            label: 'בראשית',
                            icon: 'pi pi-book'

                        },
                        {
                            label: 'שמות',
                            icon: 'pi pi-book'
                        },
                        {
                            label: 'ויקרא',
                            icon: 'pi pi-book'
                        },
                        {
                            label: 'במדבר',
                            icon: 'pi pi-book'
                        },
                        {
                            label: 'דברים',
                            icon: 'pi pi-book'
                        }
        
                    ]
                }
            ]
        },
        {
            label: ' עובדים',
            icon: 'pi pi-address-book',
            url:'/homeManager/managerList'

        },
        {
            label: ' משתמשים',
            icon: 'pi pi-address-book',
            url:'/homeManager/usersList'

        },
        {
            label: 'צור קשר',
            icon: 'pi pi-envelope',
            url:'/homeManager/contact'

        },
        {
            label: ' התנתקות',
            icon: 'pi pi-envelope',
            url:'/homeManager/out'

        }

    ];
    console.log(localStorage.getItem("token"));
    const end = <img alt="logo" src={require("./logo.png")} height="40" className="mr-2"></img>;
    return (
        
        <> 
            <div className="card1">
                <Menubar model={localStorage.getItem("token") ? (roles==="admin" ? items2 : items1) : items} end={end}/>
              
            </div>

        </>

    );
  }
  
  
export default NavBarUsers;