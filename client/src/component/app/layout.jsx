import { Outlet } from "react-router-dom"
import NavBarUsers from "../navBar"

const Layout=()=>{
return(
<>
    <div className="page">
        <header ><NavBarUsers/></header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </div>
    </>
)
}
export default Layout