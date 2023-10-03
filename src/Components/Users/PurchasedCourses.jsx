import React, { useState } from 'react';
import { Button, Card,Typography } from '@mui/material';


const PurchasedCourses = () => {
  const [PurchasedCourse, setPurchasedCourse] = useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/users/purchasedCourses', {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((Response) => {
      return Response.json();
    }).then((data) => {
      console.log(data.purchasedCourses)
      setPurchasedCourse(data.purchasedCourses);
    })
  }, [])


  return (
    <>
      <div>

        <h1 style={{ color: "darkgreen" }}>Your Courses</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {
            PurchasedCourse.map((eachCourse) => {
              return <div>
                <Card sx={{ width: "16vmax", height: "20vmax", border: "0.2vmax solid darkgreen", borderRadius: "2vmax", padding: "2vmax", margin: "1vmax" }}>
                  <h3 style={{ marginLeft: "5.5vmax" }}>Course</h3> <br />
                  <Typography> Course :  {eachCourse.title} </Typography> <br />
                  <Typography> Description : {eachCourse.description} </Typography><br /><br/>
                  <Button variant='contained' sx={{ backgroundColor: "darkgreen" }}>View content</Button>
                </Card>
              </div>
            })
          }
        </div>
      </div >
    </>
  )
}

export default PurchasedCourses;