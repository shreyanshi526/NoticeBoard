import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Button, Typography } from '@mui/material';
import DrawIcon from '@mui/icons-material/Draw';
import TextField from '@mui/material/TextField';
import p1 from '../../assets/User/landingP1.png';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';

const Landing = () => {
    const navigateTo = useNavigate();

    const [isloginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(true);

    const handleRegisterButtonClick = () => {
        setRegisterModalOpen(true);
    }
        const closeRegisterModal =()=>{
        setRegisterModalOpen(false);
    }

    const handleLoginButtonClick = () => {
        setLoginModalOpen(true);
    }
    const closeLoginModal = () => {
        setLoginModalOpen(false);
    }
    return (
        <>
            {/* AppBar Div*/}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "1vmax" }}>
                <div>
                    <DeveloperBoardOutlinedIcon sx={{ marginLeft: "7vmax", fontSize: "2.7vmax", color: "#004225" }}></DeveloperBoardOutlinedIcon>
                    <Typography sx={{ fontSize: "1.4vmax", fontWeight: 600, color: "#004225", marginTop: "-2.6vmax", marginLeft: "10vmax" }}>NoticeBoard</Typography>
                </div>
                <div>

                    <Button variant='outlined' sx={{ color: "#004225", fontSize: "1.2vmax", fontWeight: 400, marginRight: "2vmax" }}
                        onClick={handleLoginButtonClick}
                    >login</Button>

                    <LoginUser isOpen={isloginModalOpen} onClose={closeLoginModal} />

                    <Button variant='outlined' sx={{ color: "#004225", fontSize: "1.2vmax", fontWeight: 400, marginRight: "2vmax" }}
                        onClick={handleRegisterButtonClick}
                    >Register</Button>
                     
                    <RegisterUser RegIsOpen={isRegisterModalOpen} RegOnCLose={closeRegisterModal}/> 
                </div>
            </div>



            <div style={{ display: "flex", justifyContent: "space-between", }}>
                {/* contentRight */}:
                <div style={{ padding: "2vmax", marginTop: "4vmax" }}>
                    <div style={{ display: "flex", }}>
                        <Typography sx={{ fontSize: "6vmax", color: "#125B50" }}>Notice</Typography>
                        <Typography sx={{ fontSize: "6vmax", color: "#F8B400" }}>Board</Typography>
                        <DrawIcon sx={{ fontSize: "2.5vmax", marginTop: "0.3vmax", color: "#125B50" }}></DrawIcon>
                    </div>
                    <Typography sx={{ fontSize: "1.5vmax", marginLeft: "2.4vmax" }}>- Don't miss a beat,stay in loop with your <br /> career with us.</Typography>
                    {/* <Typography sx={{ fontSize: "3.3vmax",color:"#D2DE32" }}>Don't miss a beat,</Typography>
                    <Typography sx={{ fontSize: "3.3vmax",color:"rgba(162,197,121,1)" }}>stay in loop !</Typography> */}
                    <TextField varient='outlined' color="success" focused label="Email" sx={{ width: "34vmax", marginTop: "4vmax", }}></TextField>
                    <Button variant='contained' size='large' sx={{ marginLeft: "-7vmax", marginTop: "4.5vmax", backgroundColor: "#F8B400" }} ><Typography sx={{ color: "#125B50", fontWeight: 550 }}> Join
                    </Typography></Button>
                </div>
                {/* contentLeft */}
                <div style={{}}>
                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <div style={{
                            width: "50vmax", height: "50vmax", borderEndStartRadius: "50vmax", marginLeft: "5.5vmax", marginTop: "-6vmax",
                            backgroundColor: "rgba(210, 222, 50, 0.3)", marginLeft: "-3vmax"
                        }}>

                            <img src={p1} style={{ marginTop: "10vmax", marginLeft: "16vmax", width: "18vmax", height: "18vmax", borderRadius: "50vmax" }} />
                        </div>
                        <div style={{
                            width: "16vmax", height: "16vmax", borderRadius: "52vmax", background: "repeating-linear-gradient(45deg, rgba(162,197,121,0.5), rgba(162,197,121,0.3) 10px, white 10px, white 20px)",
                            marginTop: "-15vmax", marginLeft: "7vmax"
                        }}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;