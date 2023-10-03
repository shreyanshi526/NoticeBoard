import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Users/Landing';
import LoginUser from './Components/Users/LoginUser';
import RegisterUser from './Components/Users/RegisterUser';
import ListAllCourses from './Components/Users/ListAllCourses';
import PurchasedCourses from './Components/Users/PurchasedCourses';
import UserProfile from './Components/Users/UserProfile';
import LandingAdmin from './Components/Admin/LandingAdmin';
import LoginAdmin from './Components/Admin/LoginAdmin';
import CreateCourse from './Components/Admin/CreateCourse';
import ShowAllCourses from './Components/Admin/ShowAllCourses';
import ViewUsers from './Components/Admin/ViewUsers';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* admin */}
          <Route path='/Admin' element={<LandingAdmin/>}></Route>
          <Route path='/CreateCourse' element={<CreateCourse/>}></Route>
          <Route path='/LoginAdmin' element={<LoginAdmin/>}></Route>
          <Route path='/ShowAllCourses' element={<ShowAllCourses/>}></Route>
          <Route path='/ViewUsers' element={<ViewUsers/>}></Route>
          {/* users */}
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/userslogin' element={<LoginUser/>}></Route>
          <Route path='/userssignup' element={<RegisterUser/>}></Route>
          <Route path='/userscourses' element={<ListAllCourses/>}></Route>
          <Route path='/userprofile' element={<UserProfile/>}></Route>
          <Route path='/userspurchasedCourses' element={<PurchasedCourses/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
