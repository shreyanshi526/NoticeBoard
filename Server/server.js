const express = require("express")
const router = express.Router();
const connectTodb = require('./config/dbConnection');  // importing db connection file
const authenticateJwt = require('./middleware/authenticateToken')
const dotenv = require('dotenv').config();
connectTodb();  //calling to connect to database

const app = express();
const port = process.env.PORT || 5001

app.use(express.json());   //in built middleware
app.use("/users",require("./routes/UserRoutes"));
app.use("/admin",require('./routes/AdminRoutes'));

app.listen(port,()=> {
    console.log(`server on port ${port}`);
})