import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PurchasedCourses from './PurchasedCourses.jsx'
import ListAllCourses from './ListAllCourses.jsx'
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Button, TextField, Typography, useScrollTrigger } from '@mui/material';
import p1 from '../../assets/User/ProfileP1.jpg'

const UserProfile = () => {

  const navigateTo = useNavigate();

  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [section, setSection] = useState();
  const [year, setYear] = useState();


  useEffect(() => {
    fetch('http://localhost:3000/users/profile', {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.user.section)
      if (data.user.username) {
        setUsername(data.user.username)
        setPassword(data.user.password)
        setEmail(data.email)
        setSection(data.user.section)
        setYear(data.user.year)
      }
    })
  }, [])

  const handleLogout = () => {
    localStorage.setItem("token", null)
    navigateTo('/')
  }

  const handleProfileChange = () => {
    fetch('')
  }

  return (
    <>
      {/* appbar */}
      <div style={{
        width: "69vmax",
        display: "flex",
        gap: "60vmax",
        marginLeft: "6vmax",
      }}>
        <div style={{ paddingTop: "1.5vmax" }}>
          <DeveloperBoardOutlinedIcon sx={{ fontSize: "2.7vmax", color: "#004225" }}></DeveloperBoardOutlinedIcon>
          <Typography sx={{ fontSize: "1.4vmax", fontWeight: 600, color: "#004225", marginTop: "-2.6vmax", marginLeft: "3vmax" }}>NoticeBoard</Typography>
        </div>

        <div style={{ paddingTop: "1.5vmax", display: "flex", gap: "2vmax" }} >
          <Typography style={{ padding: "0.5vmax" }}>{username}</Typography>
          <Button variant='outlined' onClick={handleLogout}>logout</Button>
        </div>
      </div>

      {/* content */}

      <div style={{ width: "85vmax", border: "0.2vmax solid grey", borderRadius: "3.8vmax", marginLeft: "6vmax", marginTop: "5vmax" }}>
        {/* profile */}
        <div style={{ display: "flex", gap: "55vmax", padding: "2vmax 2vmax" }}>
          <img style={{ width: "15vmax", height: "15vmax", borderRadius: "50vmax", border: "0.1vmax solid grey" }} src={p1} />
          <Button style={{ height: "2.5vmax", marginTop: "5vmax" }} variant='outlined'>edit profile</Button>
        </div>

        {/* details */}
        <div style={{ width: "70vmax", border: "0.2vmax solid lightgrey", marginLeft: "7vmax", padding: "1vmax 1vmax", borderRadius: "3vmax", }}>
          <h4>contact-detials</h4>
          <p>full name : {username}</p>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <p>Section : {section}</p>
          <p>Year : {year}</p>

          {/* Section : <TextField variant='standard' size='small' 
            onChange={(e) => {
              setSection(e.target.value)
            }}>{section}</TextField><br />


          Year : <TextField variant='standard' size='small' defaultValue={year}
            onChange={(e) => {
              setYear(e.target.value)
            }}></TextField><br /> */}

            

          <button onClick={handleProfileChange}>save</button>
        </div>


        {/* your courses */}

        <div style={{ width: "70vmax", border: "0.2vmax solid lightgrey", marginLeft: "7vmax", padding: "1vmax 1vmax", borderRadius: "3vmax", marginTop: "2vmax" }}>
          <PurchasedCourses></PurchasedCourses>
        </div>


        {/* all courses */}

        <div style={{ width: "70vmax", border: "0.2vmax solid lightgrey", marginLeft: "7vmax", padding: "1vmax 1vmax", borderRadius: "3vmax", marginTop: "2vmax" }}>
          <ListAllCourses></ListAllCourses>
        </div>
      </div>
    </>
  )
}

export default UserProfile;