import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Users/Landing';
import LoginUser from './Components/Users/LoginUser';
import RegisterUser from './Components/Users/RegisterUser';
import ListAllCourses from './Components/Users/ListAllCourses';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/userslogin' element={<LoginUser/>}></Route>
          <Route path='/userssignup' element={<RegisterUser/>}></Route>
          <Route path='/userscourses' element={<ListAllCourses/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
