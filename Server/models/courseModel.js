const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    cost: Number,
    imageLink: String,
    published: Boolean
})

module.exports = mongoose.model('COURSE', courseSchema);