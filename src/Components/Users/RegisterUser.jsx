import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import ReactModal from 'react-modal';
import P1 from '../../assets/User/RegisterP1.jpg'

const RegisterUser = ({ RegIsOpen, RegOnCLose }) => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState();
  const [passwor, setPassword] = useState();
  const [usernm, setUsername] = useState();
  const [confirmP, setConfirmP] = useState();

  const handleRegisterOnClick = () => {
    let Email = email;
    let username = usernm;
    let password = passwor;
    let ConfirmP = confirmP;
    if (password !== ConfirmP) {
      alert("passwords don't match,kindly check!")
    }

    else {
      fetch('http://localhost:3000/users/signup', {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          Email
        }),
        headers: {
          "Content-type": "application/json"
        }
      }).then((res) => {
        if (res.status === 201) {
          alert("User joined in successfully!");
          navigateTo('/userprofile');
        }
        else if (res.status === 403) {
          alert("user already exsists!!")
        }
        else if (res.status === 411) {
          alert("All fields are mandatory")
        }
        return res.json();
      }).then((data) => {
        localStorage.setItem("token", data.token)
      })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  return (
    <>
      <ReactModal isOpen={RegIsOpen} onRequestClose={RegOnCLose} style={{
        content: {
          width: "60vmax", height: "35.6vmax", marginLeft: "15vmax", marginTop: "-0.9vmax",
        }
      }}>

        <div style={{ display: "flex", padding: "0vmax", }}>

          {/* left */}
          <div style={{ marginLeft: "-1.7vmax", marginTop: "-1.6vmax", padding: "0vmax", marginBottom: "-3vmax" }}>
            <img src={P1} style={{ width: "28vmax", height: "37vmax", borderBottomRightRadius: "8vmax" }} />
          </div>
          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "4vmax" }}>
            <Typography sx={{ fontSize: "2.4vmax", fontWeight: 550, color: "#699C95", marginLeft: "8.6vmax" }}>Register</Typography>
            <input type='text' placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              style={{
                paddingLeft: "1.2vmax", border: "0.2vmax solid #125B50", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginLeft: "1.8vmax", marginBottom: "1.5vmax", marginTop: "3vmax"
              }}></input>

            <input type='text' placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              style={{
                paddingLeft: "1.2vmax", border: "0.2vmax solid #125B50", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginLeft: "1.8vmax", marginBottom: "1.5vmax",
              }}></input>

            <input type='text' placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              style={{
                paddingLeft: "1.2vmax", border: "0.2vmax solid #125B50", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginLeft: "1.8vmax", marginBottom: "1.5vmax",
              }}></input>
            <input type='text' placeholder='Confirm Password'
              onChange={(e) => setConfirmP(e.target.value)}
              style={{
                paddingLeft: "1.2vmax", border: "0.2vmax solid #125B50", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginLeft: "1.8vmax",
              }}></input>

            <Button variant='contained' onClick={handleRegisterOnClick}
              sx={{ width: "23.5vmax", borderRadius: "2vmax", marginTop: "1.2vmax", marginLeft: "1.8vmax", height: "2.9vmax", backgroundColor: "#125B50" }}>login</Button>

          </div>
        </div>
        {/* <button onClick={RegOnCLose}>close</button> */}
      </ReactModal>

    </>
  )
}

export default RegisterUser;