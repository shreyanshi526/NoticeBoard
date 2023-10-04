const express = require('express');
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const authenticateJwt = require('../middleware/authenticateToken');
const USER = require('../models/userModel')
const COURSE = require('../models/courseModel')

const router = express.Router();


router.post("/login", async (req, res) => {
    // logic to log in user
    const { username, password } = req.body;
    const userAvail = await USER.findOne({ username, password });
    if (userAvail) {

        const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' });
        return res.status(201).json({ token, msg: "user log in successful" });
    } else {
        return res.status(403).send("no user with this credential is present")
    }
})


router.post('/signup', async (req, res) => {
    // logic to sign up user
    const { username, password } = req.body;
    const userAvail = await USER.findOne({ username });
    if (userAvail) {
        return res.status(403).send("user already exsist.")
    }
    else {
        const NewUser = new USER(req.body);
        await NewUser.save();
        const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        return res.status(201).json({ msg: " user created successfully", token });
    }
});


router.get("/courses", authenticateJwt, async (req, res) => {
    // logic to list all courses

    const Allcourses = await COURSE.find({});
    return res.status(201).json({ Allcourses });
});


router.post('/details', authenticateJwt, async (req, res) => {
    // logic to get user details and upadte the,
    const username = req.user.username;
    const userDeatils = req.body;
    const user = await USER.findOneAndUpdate(
        { username: username },
        { $set: userDeatils },
        { new: true }
    );

    if (user) {
        return res.status(201).json({ msg: "deatils updated successfully", user })
    }
})

router.get('/profile', authenticateJwt, async (req, res) => {
    //user profile route
   
        const username = req.user.username;
        const user = await USER.findOne({ username }).populate('purchasedCourses');
        if (user) {
            return res.status(201).json({ user });
        }
    
})

router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    // logic to purchase a course
    
        const courseAvail = await COURSE.findById(req.params.courseId);
        if (courseAvail) {
            const userAvail = await USER.findOne({ username: req.user.username });
            if (userAvail) {
                userAvail.purchasedCourses.push(courseAvail);
                await userAvail.save();
                return res.status(201).json({ msg: "course purchsed successfully", courseAvail })
            }
        } else {
            return res.status(403).send("no course with this ID is present")
        }
   
})

router.get('/purchasedCourses', authenticateJwt,async (req, res) => {
   
        // logic to view purchased courses
        const userAvail = await USER.findOne({ username: req.user.username }).populate('purchasedCourses');
        if (userAvail) {
            const YourPurchasedCourses = userAvail.purchasedCourses;
            return res.status(201).json({ msg: "your purchsed courses", YourPurchasedCourses });
        } else {
            return res.status(403).send("no user with this username is present")
        }

  
})

module.exports = router;
