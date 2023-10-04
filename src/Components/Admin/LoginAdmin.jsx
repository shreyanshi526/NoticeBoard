import React, { useState } from 'react'
import ReactModal from 'react-modal';
import { Button, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import DrawIcon from '@mui/icons-material/Draw';


const LoginAdmin = ({ isOpen, onClose }) => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLoginOnClick = () => {
     fetch('')
  }

  return (
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={{
        content: {
          width: "27vmax", height: "38vmax", border: "0.3vmax solid #385a64", borderRadius: "3vmax", marginLeft: "35vmax"
        }
      }}>

        <button onClick={onClose} style={{ marginTop: "0.5vmax", backgroundColor: "white", border: "none", marginLeft: "24vmax" }}> <CancelIcon sx={{ fontSize: "2vmax", color: "#125B50" }}></CancelIcon> </button>

        <div style={{ display: "flex", marginTop: "4vmax", marginLeft: "5vmax" }}>
          <Typography sx={{ fontSize: "2.5vmax", fontWeight: 550, color: "#385a64" }}>Notice</Typography>
          <Typography sx={{ fontSize: "2.5vmax", fontWeight: 550, color: "#ff9b6a", paddingRight: "0.4vmax" }}>Board</Typography>
          <DrawIcon sx={{ fontSize: "2.3vmax", marginTop: "-0.9vmax", color: "#385a64" }}></DrawIcon>
        </div>

        <div style={{ marginLeft: "1.8vmax", marginTop: "3vmax" }}>
          <Typography sx={{ fontSize: "1.2vmax", color: "#385a64", marginBottom: "0.5vmax", fontWeight: 550, paddingLeft: "0.3vmax" }}>Username : </Typography>
          <input type='text'
            onChange={(e) => setUsername(e.target.value)}
            style={{
              paddingLeft: "1.2vmax", border: "0.2vmax solid #385a64", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginBottom: "1.3vmax"
            }}></input>

          <Typography sx={{ fontSize: "1.2vmax", color: "#385a64", marginBottom: "0.5vmax", fontWeight: 550, paddingLeft: "0.3vmax" }}>Password : </Typography>
          <input type='text'
            onChange={(e) => setPassword(e.target.value)}
            style={{
              paddingLeft: "1.2vmax", border: "0.2vmax solid #385a64", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginBottom: "0.3vmax",
            }}></input>
          <button style={{ fontSize: "1.1vmax", backgroundColor: "white", border: "none", color: "#125B50", fontWeight: 400, marginLeft: "14vmax", paddingTop: "0.2vmax" }}> forgot password? </button>
        </div>

        {/* loginbutton */}
        <Button variant='contained' onClick={handleLoginOnClick}
          sx={{ width: "23.5vmax", borderRadius: "2vmax", marginTop: "1.2vmax", marginLeft: "1.8vmax", height: "2.9vmax", backgroundColor: "#385a64" }}>login</Button>
      </ReactModal>
    </>
  )
}

export default LoginAdmin;