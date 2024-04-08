import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Tehilim() {

  const navigate=useNavigate()
  const a=()=>{navigate('/homeUsers/contact')}
   return (
   <>
   <div>
       
       <button onClick={a}>to ask</button>
   </div>
   <Outlet/>
   </>
   );
 }
  
  
  export default Tehilim;