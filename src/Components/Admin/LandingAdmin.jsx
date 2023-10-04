import React, { useState } from 'react'
import LoginAdmin from './LoginAdmin';
import p1 from '../../assets/Admin/LandingAdminP1.jpg'
import { Typography, TextField, Button } from '@mui/material';
import DrawIcon from '@mui/icons-material/Draw';

const LandingAdmin = () => {
    const [isloginModalOpen,setLoginmodelOpen] = useState(true)

    const handleLoginButtonClick = () => {
        setLoginmodelOpen(true)
    }
    const closeLoginModal = () =>{
        setLoginmodelOpen(false)
    }

    return (
        <>
            {/* Appbar */}
            <div>
                <div style={{ display: "flex", gap: "14.5vmax" }}>
                    <img src={p1} style={{ width: "47vmax", height: "42vmax", marginTop: "2vmax", }} />
                    <div style={{ display: "flex", marginTop: "12vmax" }}>
                        <Typography sx={{ fontSize: "6vmax", color: "#385a64" }}>Notice</Typography>
                        <Typography sx={{ fontSize: "6vmax", color: "#ff9b6a" }}>Board</Typography>
                        <DrawIcon sx={{ fontSize: "2.5vmax", marginTop: "0.3vmax", color: "#385a64" }}></DrawIcon>
                    
                    </div>
                </div>
                <Typography sx={{ fontSize: "1.5vmax", marginLeft: "67vmax", marginTop: "-22vmax" }}> - Don't miss a beat,stay in loop with your <br /> career join us.</Typography>
                <div style={{marginLeft:"62vmax"}}>
                    <TextField varient='outlined' color="success" focused label="Email" sx={{ width: "34vmax", marginTop: "4vmax", }}></TextField>
                    <Button variant='contained' size='large' sx={{ marginLeft: "-8vmax", marginTop: "4.5vmax", backgroundColor: "#385a64" }} onClick={handleLoginButtonClick} ><Typography sx={{ color: "#ff9b6a", fontWeight: 550 }}> login
                    </Typography></Button>
                    <LoginAdmin isOpen={isloginModalOpen} onCLose={closeLoginModal}></LoginAdmin>
                </div>
            </div>

        </>
    )
}

export default LandingAdmin;