//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './flags.css';
import { Route, Routes } from "react-router-dom"
import HomeManager from './component/Manager/homeManager';
import HomeUsers from './component/Users/homeUser';
import Contact from './component/contact'
import Questions from './component/lessons/questions'
import Tehilim from './component/lessons/tehilim'
import Halacha from './component/lessons/halacha'
import Gmara from './component/lessons/gmara'
import Torah from './component/lessons/Torah';
import Messages from './component/messages'
import Entry from './component/entry'
import FromToken from './component/app/fromToken';
import NavBar from './component/navBar'
import Out from './component/out'
import ManagerList from './component/Manager/managerList'
import UsersList from './component/Users/userList'
import Layout from './component/app/layout';
import GetCategory from './component/lessons/getCategory'
function App() {
  const {roles}=FromToken()
  return (
  <>
 {/* <NavBar/> */}
  {<GetCategory/>}
   
  <Routes>
        {/* <Route path='/home' element={<Entry/>}/> */}
        <Route path='/' element={<Layout/>} >
        <Route path='/entry' element={<Entry/>} />
        <Route path='/homeManager' element={<HomeManager/>} />
        <Route path='/homeManager/out' element={<Out/>} />
        <Route path='/homeManager/managerList' element={<ManagerList/>} />
        <Route path='/homeManager/UsersList' element={<UsersList/>} />
        <Route path='/homeManager/messages' element={<Messages/>} />
        <Route path='/homeManager/questions' element={<Questions/>} />
        <Route path='/homeManager/contact' element={<Contact/>} />
        <Route path='/homeManager/tehilim' element={<Tehilim/>} />
        <Route path='/homeManager/halacha' element={<Halacha/>} />
        <Route path='/homeManager/torah' element={<Torah/>} />
        <Route path='/homeManager/gmara' element={<Gmara/>} />
        <Route path='/homeManager' element={<HomeManager />}>
          
        </Route>

        {/* <Route path='/home' element={roles=="admin"? <HomeManager/> :<HomeUsers/>}></Route> */}
        <Route path='/homeUsers' element={<HomeUsers />}></Route>
          <Route path='/homeUsers/contact' element={<Contact/>} />
          <Route path='/homeUsers/out' element={<Out/>} />
          <Route path='/homeUsers/messages' element={<Messages/>} />
          <Route path='/homeUsers/contact' element={<Contact/>} />
          <Route path='/homeUsers/questions' element={<Questions/>} />
          <Route path='/homeUsers/halacha' element={<Halacha/>} />
          <Route path='/homeUsers/torah/:chumash' element={<Torah/>} />
          <Route path='/homeUsers/gmara' element={<Gmara/>} />
          <Route path='/homeUsers/tehilim' element={<Tehilim/>} />
         
</Route>
        
        

      </Routes>

  </>
  );

}

export default App;
