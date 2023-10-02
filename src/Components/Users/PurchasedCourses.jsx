import { Button } from '@mui/material';
import React, { useState } from 'react'

const PurchasedCourses = () => {
  const [PurchasedCourse, setPurchasedCourse] = useState([]);

  const handleClick = () => {
    fetch('http://localhost:3000/users/purchasedCourses', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((Response) => {
      return Response.json();
    }).then((data) => {
      console.log(data);
      setPurchasedCourse(data);
    })
  }

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/users/purchasedCourses', {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //       "Authorization": "Bearer " + localStorage.getItem("token")
  //     }
  //   }).then((res) => {
  //     res.json().then((data) => {
  //       setPurchasedCourse(data)
  //     })
  //   })
  // }, [])



  return (
    <>
      <div>
        welcome !!
        <button onClick={handleClick}>view</button>

      </div >
    </>
  )
}

export default PurchasedCourses;