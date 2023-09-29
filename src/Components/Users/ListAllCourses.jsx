import React, { useState } from 'react'

const ListAllCourses = () => {

    const [courses, setCourses] = useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/users/courses', {
            method: "GET"
        }).then((response) => {
            response.json().then((data) => {
               // console.log(data)
                setCourses(data)
            })
        })
    },[])
    
    setInterval(()=>{
       fetch('http://localhost:3000/users/courses',{
        method:"GET"
       }).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            setCourses(data)
        })
       })
    },1000)

    return (
        <>
            <div>
                {courses.map((eachCourse) => {
                    return <div>
                        {eachCourse.title}
                        {eachCourse.description}
                    </div>
                })}
            </div>
        </>

    )
}

export default ListAllCourses;