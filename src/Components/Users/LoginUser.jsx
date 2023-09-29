import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ReactModal from 'react-modal';
import CancelIcon from '@mui/icons-material/Cancel';
import DrawIcon from '@mui/icons-material/Draw';

const LoginUser = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLoginOnClick = () => {
        let e = email;
        let p = password;
        console.log(e,p)
    }

    return (
        <>

            <ReactModal isOpen={isOpen} onRequestClose={onClose} style={{
                content: {
                    width: "27vmax", height: "38vmax", border: "0.3vmax solid #125B50", borderRadius: "3vmax", marginLeft: "35vmax"
                }
            }}>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", marginTop: "0.6vmax" }}>
                        <Typography sx={{ fontSize: "1.2vmax", fontWeight: 550, color: "#125B50" }}>Notice</Typography>
                        <Typography sx={{ fontSize: "1.2vmax", fontWeight: 550, color: "#F8B400", paddingRight: "0.4vmax" }}>Board</Typography>
                        <DrawIcon sx={{ fontSize: "1.5vmax", marginTop: "0.vmax", color: "#125B50" }}></DrawIcon>
                    </div>
                    <button onClick={onClose} style={{ backgroundColor: "white", border: "none", }}> <CancelIcon sx={{ fontSize: "2vmax", color: "#125B50" }}></CancelIcon> </button>
                </div>

                <div style={{ marginTop: "4vmax", display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ marginLeft: "8.8vmax", fontSize: "3vmax", fontWeight: 550, color: "#F8B400", }}>Login</Typography>
                     
                    <input type='text' placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            paddingLeft: "1.2vmax", border: "0.2vmax solid #125B50", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginLeft: "1.8vmax", marginBottom: "2vmax", marginTop: "3vmax"
                        }}></input>

                    <input type='text' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            paddingLeft: "1.2vmax", border: "0.2vmax solid #125B50", width: "22vmax", height: "2.9vmax", borderRadius: "2vmax", marginLeft: "1.8vmax",
                        }}></input>

                    <button style={{ fontSize: "1.1vmax", backgroundColor: "white", border: "none", color: "#125B50", fontWeight: 400, marginLeft: "16vmax", paddingTop: "0.2vmax" }}> forgot password? </button>

                    {/* loginbutton */}
                    <Button variant='contained'  onClick={handleLoginOnClick}
                    sx={{ width: "23.5vmax", borderRadius: "2vmax", marginTop: "1.2vmax", marginLeft: "1.8vmax", height: "2.9vmax", backgroundColor: "#125B50" }}>login</Button>
                </div>

                <div style={{ display: "flex", marginLeft: "5.3vmax", marginTop: "2vmax" }}>
                    <div style={{ height: "0.15vmax", width: "7vmax", backgroundColor: "#125B50", marginTop: "1.1vmax", marginRight: "0.4vmax" }}></div>
                    <Typography sx={{ fontSize: "1.3vmax", color: "#F8B400", fontWeight: 550 }}>or</Typography>
                    <div style={{ height: "0.15vmax", width: "7vmax", backgroundColor: "#125B50", marginTop: "1.1vmax", marginLeft: "0.4vmax" }}></div>
                </div>
                <Button variant='outlined' sx={{ width: "23.5vmax", borderRadius: "2vmax", color: "#125B50", border: "0.2vmax solid  #F8B400", fontSize: "1.3vmax", marginLeft: "1.8vmax", marginTop: "1vmax" }}>REgister Now</Button>
            </ReactModal>
        </>
    )
}

export default LoginUser;