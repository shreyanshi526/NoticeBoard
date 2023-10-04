const mongoose = require('mongoose')

const connectTodb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/COURSE-SELLING-APP", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log("Connected successfully to MongoDB");
            })
            .catch(err => {
                console.error("Error connecting to MongoDB:", err);
            });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectTodb;