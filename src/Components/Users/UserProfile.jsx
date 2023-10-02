import React from 'react'
import PurchasedCourses from './PurchasedCourses.jsx'
import ListAllCourses from './ListAllCourses.jsx'

const UserProfile = () => {
  return (
    <>
      welcome to your profile!!

      <div style={{width:"60vmax",height:"40vmax", border:"0.4vmax solid black"}}>
        <h1>your courses</h1>
       <PurchasedCourses></PurchasedCourses>
      </div>
      <div style={{width:"60vmax",height:"40vmax", border:"0.4vmax solid black"}}>
        <h1>ALL courses</h1>
       <ListAllCourses></ListAllCourses>
      </div> 
    </>
  )
}

export default UserProfile;