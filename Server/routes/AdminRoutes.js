const express = require('express');
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const authenticateJwt = require('../middleware/authenticateToken');
const USER = require('../models/userModel')
const COURSE = require('../models/courseModel')
const ADMIN = require('../models/adminModel')

const router = express.Router();

router.post('/signup', async (req, res) => {
    // logic to sign up admin
    const { username, password } = req.body;
    function callback(admin) {
        if (admin) {
            return res.status(403).send("user already exsists");
        }
        else {
            const obj = { username: username, password: password };
            const newAdmin = new ADMIN(obj);
            newAdmin.save();
            const token = jwt.sign({ username, role: 'admin' }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' });
            res.status(201).json({ msg: "admin created successfully", token });
        }
    }
    ADMIN.findOne({ username }).then(callback);
})

router.post('/login', async (req, res) => {
    // logic to log in admin
    const { username, password } = req.body;
    const admin = await ADMIN.findOne({ username, password });
    if (admin) {
        const token = jwt.sign({ username, role: 'admin' }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' });
        return res.status(201).json({ token, msg: "admin log in successfull" });
    }
    else {
        return res.status(403).send("admin account dosnt exsist")
    }
})

router.post('/courses/create', authenticateJwt, async (req, res) => {
    // logic to create a course
    const Newcourse = req.body;
    const Course = await COURSE(Newcourse,);
    await Course.save();
    return res.status(201).json({ msg: "course published successfully", courseId: Course.id })
})

router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    // logic to edit a course
    //const courseAvail =  Courses.findOne(req.params.courseId);
    const courseAvail = await COURSE.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (courseAvail) {
        return res.status(201).json({ msg: "course updated successfully", courseAvail })
    } else {
        return res.status(403).send("no course with this ID is present")
    }
})

router.get('/courses', authenticateJwt, async (req, res) => {
    // logic to get all courses
    const Allcourses = await COURSE.find({});
    return res.status(201).json({ Allcourses });
})

module.exports = router;