import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import { Button, Typography } from '@mui/material';
import DrawIcon from '@mui/icons-material/Draw';
import TextField from '@mui/material/TextField';
import p1 from '../../assets/User/landingP1.png';
import p2 from '../../assets/User/landingP2.png';
import p3 from '../../assets/User/landingP3.png';
import p4 from '../../assets/User/landingP4.png';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';

const Landing = () => {


    const [isloginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

    const handleRegisterButtonClick = () => {
        setRegisterModalOpen(true);
    }
    const closeRegisterModal = () => {
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

                    <RegisterUser RegIsOpen={isRegisterModalOpen} RegOnCLose={closeRegisterModal} />
                </div>
            </div>


            {/* frontpage */}
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

                        {/* quadrant */}
                        <div style={{
                            width: "50vmax", height: "50vmax", borderEndStartRadius: "50vmax", marginLeft: "5.5vmax", marginTop: "-6vmax",
                            backgroundColor: "#f1f5c1", marginLeft: "-3vmax"
                        }}>


                            {/* image decor2 */}
                            {/* <div style={{ width: "23vmax", height: "23vmax", borderRadius: "50vmax", border: "0.3vmax solid #125B50", marginTop: "13vmax", marginLeft: "17vmax" }}>
                                    
                                    <div style={{ width: "1vmax", height: "2vmax", backgroundColor: "#f1f5c1", borderRadius: "50vmax", rotate: "130deg", marginLeft: "3.5vmax", marginTop: "-2vmax" }}></div>
                                    <div style={{ width: "1vmax", height: "2vmax", backgroundColor: "#f1f5c1", borderRadius: "50vmax", rotate: "10deg", marginLeft: "22.5vmax", marginTop: "-12vmax" }}></div>
                                    <div style={{ width: "1vmax", height: "2vmax", backgroundColor: "#f1f5c1", borderRadius: "50vmax", rotate: "60deg", marginLeft: "3.5vmax", marginTop: "-10vmax" }}></div>
                                </div> */}

                            <div style={{ marginLeft: "6vmax" }}>
                                {/* image */}
                                <img src={p1} style={{ marginLeft: "19vmax", marginTop: "13vmax", width: "20vmax", height: "20vmax", borderRadius: "50vmax", border: "0.2vmax solid #125B50" }} />

                                {/* circle */}
                                <div style={{
                                    width: "20vmax", height: "20vmax", borderRadius: "52vmax", background: "repeating-linear-gradient(45deg, rgba(18,91,80,1), 10px, #f1f5c1 10px ,#f1f5c1 20px)",
                                    marginLeft: "8vmax", marginTop: "-20vmax"
                                }}>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

            {/* Our Services part */}
            <div style={{ marginTop: "4vmax", marginBottom: "5vmax" }}>
                {/* heading */}
                <div style={{ marginLeft: "38vmax" }}>
                    <Typography style={{
                        fontSize: "3.3vmax", fontWeight: 550, color: "#125B50"
                    }}>What We Do?</Typography>
                    <div style={{ border: "0.2vmax solid #F8B400", width: "7vmax" }}></div>
                </div>

                {/* content */}

                <div style={{ display: "flex", marginTop: "7vmax", gap: "12vmax" }}>
                    <div>
                        <img src={p4} style={{ width: "14vmax", height: "17vmax" }} />
                    </div>
                    <div style={{paddingTop:"2vmax"}}>
                        <img src={p2} style={{ width: "45vmax", height: "30vmax" }} />
                        <img src={p3} style={{ width: "45vmax", height: "30vmax",marginTop:"-39vmax" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;