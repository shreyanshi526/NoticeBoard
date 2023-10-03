import React, { useState } from 'react'
import { Button, TextField, Typography, Card } from '@mui/material';


const ListAllCourses = () => {

    const [courses, setCourses] = useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/users/courses', {
            method: "GET"
        }).then((response) => {
            response.json().then((data) => {
                console.log(data)
                setCourses(data)
            })
        })
    }, [])

    // setInterval(()=>{
    //    fetch('http://localhost:3000/users/courses',{
    //     method:"GET"
    //    }).then((response)=>{
    //     response.json().then((data)=>{
    //         console.log(data)
    //         setCourses(data)
    //     })
    //    })
    // },1000)

    return (
        <>
            <div>
                <h1 style={{ color: "darkgreen" }}>All Courses</h1>
                <div style={{
                    display: "flex", flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>

                    {courses.map((eachCourse) => {
                        return <div >
                            <Card sx={{ width: "16vmax", height: "20vmax", border: "0.2vmax solid darkgreen", borderRadius: "2vmax", padding: "2vmax", margin:"1vmax" }}>
                                <h3 style={{ marginLeft: "5.5vmax" }}>Course</h3> <br />
                                <Typography> Course :  {eachCourse.title} </Typography> <br />
                                <Typography> Description : {eachCourse.description} </Typography><br />
                                <Typography> Price :  {eachCourse.price} </Typography><br />
                                <Button variant='contained' sx={{ backgroundColor: "darkgreen" }}>Purchase</Button>
                            </Card>
                        </div>
                    })}
                </div>
            </div>
        </>

    )
}

export default ListAllCourses;