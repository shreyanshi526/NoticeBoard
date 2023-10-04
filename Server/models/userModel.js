const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'COURSE' }],
    section: String,
    year: String
})

//exporting the schema
module.exports = new mongoose.model('USER',userSchema);