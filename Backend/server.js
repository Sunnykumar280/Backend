/**
 * in this i will start the server 
 * in this i connect the database 
 * 
 * database ko connect ke liye config folder bana ke database.js usme bata ke connect krna hoga 
 * 
 */


const app = require("./src/app")
const connectToDb = require("./src/config/database")
require("dotenv").config()
connectToDb()
app.listen(3000, () => {
console.log("server is running in port 3000")
})