import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Questions() {

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
  
  export default Questions;