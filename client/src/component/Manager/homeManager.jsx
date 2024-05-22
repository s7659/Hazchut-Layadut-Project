 import { Button } from "primereact/button";
 import AddManager, {HeadlessDemo} from './addManager'
 import AddLesson from "../lessons/addLesson";
 import React, { useState } from "react";
function HomeManager() {
  
    return (<>
    {/* <h1>manager</h1> */}
    
    <AddManager/>
    <AddLesson/>
    <AddMessage/>
      </>
    );
  }
  
  export default HomeManager;